import logger from '../utils/logger';
// import { verifyUser } from '../services/user';
import * as FavouriteLists from '../models/Favourite';
//import NotFoundError from '../utils/NotFoundError';

/**
 * Get all todos for a user.
 *
 * @param userId
 */
export async function getAllFavMovies(userId) {  

  logger.info(`Getting list of favourite Movies for userId ${userId}`);

  const data = await FavouriteLists.getAllFavMovies(userId);

  return {
    data,
    message: `List of favourite Movies for userId ${userId}`
  };
}

/**
 * Add a todo for a user.
 *
 * @param userId
 * @param todoText
 */
export async function addFavMovies(userId,  movieName, movieYear, rate, reviews, isPrivate) {
  //await verifyUser(userId);

  const data = await FavouriteLists.add(userId,  movieName, movieYear, rate, reviews, isPrivate);

  return {
    data,
    message: `New todo added succesfully for userId ${userId}`
  };
}