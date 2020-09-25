import * as User from '../models/User';
import logger from '../utils/logger';
import BadRequestError from '../utils/BadRequestError';
import { hash, compare } from '../utils/crypt';
import { generateToken } from '../utils/jwt';
import * as UserSession from '../models/UserSession';

/**
 * Create a new user.
 *
 * @param params
 * 
 */
export async function createUser(params) {

    const existingUsername = await User.getUserByUsername(params.userName);

    if(existingUsername)
    {
        logger.error('There is already an existing user with ths Username');

        throw new BadRequestError('There is already an existing user with ths username');
    }  
    
    const existingUser = await User.getUserByEmail(params.email);

    if(existingUser)
    {
        logger.error('There is already an existing user with ths email');

        throw new BadRequestError('There is already an existing user with ths email');
    }   

   

    const hashedPassword = hash(params.password);

    const userInsertData = await User.create({ ...params, password: hashedPassword });
    

    return {
      data: userInsertData,
      message: "Registered successfully"        
    };
}

/**
 * Verify email and password and login.
 *
 * @param params
 */
export async function login(params) {
  const { email, password } = params;

  const user = await User.getUserByEmail(email);

  if (!user) {
    logger.error('Invalid login credentials');

    throw new BadRequestError('Invalid login credentials');
  }

  const isPasswordValid = compare(password, user.password);

  if (!isPasswordValid) {
    logger.error('Invalid login credentials');

    throw new BadRequestError('Invalid login credentials');
  }

  const token = generateToken({
    id: user.id,
    userName: user.userName,
    email: user.email
  });

  await UserSession.saveToken(user.id, token);  

  user.password = undefined;

  return {
    data: {
      user,
      token
    },       
    message: 'Logged in successfully'
  };
}



