import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

const table = 'users';

export async function create(params) {
  
  const [data] = await connection.insert(snakeize(params)).into(table).returning('*');
  
  return camelize(data);
}




export async function getUserByEmail(email) {
  
    const [data] = await connection.select('*').from(table).where({ email });
    
    return data ? data : null;
}
  
export async function getUserByUsername(userName) {
  
    const [data] = await connection.select('*').from(table).where({ user_name: userName });
    
    return data ? data : null;
}
