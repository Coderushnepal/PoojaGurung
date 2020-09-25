import connection from '../db';
import camelize from 'camelize';
import snakeize from 'snakeize';

const table = 'favourite_movies';

export async function getAllFavMovies(userId) {
  const data = await connection
    .select('id', 'movie_name','movie_year','rate', 'reviews','is_private', 'is_active', 'created_at')
    .from(table)
    .where('user_id', userId)
    .where('is_active', true)
    ;

  return camelize(data);
}


export async function add(userId, movieName, movieYear, rate, reviews, isPrivate) {
  const [insertedData] = await connection.insert(
    { 
      user_id: userId,
      movie_name: movieName ,
      movie_year: movieYear ,
      rate: rate ,
      reviews: reviews ,
      is_private: isPrivate 
    })
  .into(table).returning('*');

  return camelize(insertedData);
}