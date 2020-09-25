import * as favouriteService from '../services/Favourite';

/**
 * Controller to get fav movies of all user.
 *
 * @param req
 * @param res
 * @param next
 */
export function getAllFavMovies(req, res, next) {
    favouriteService
     .getAllFavMovies(+req.user.id)
     .then(data => res.json(data))
     .catch(err => next(err));
}


/**
 * Controller to add a todo for a user.
 *
 * @param req
 * @param res
 * @param next
 */
export function addFavMovies(req, res, next) {
    favouriteService
      .addFavMovies(+req.user.id, req.body.movieName, req.body.movieYear, req.body.rate, req.body.reviews, req.body.isPrivate)
      .then(data => res.json(data))
      .catch(err => next(err));
}