import Joi from 'joi';

const ADD_FAV_MOVIES_SCHEMA = Joi.object().keys({
    movieName: Joi.string().max(50).required(),
    movieYear: Joi.number().integer().required(),
    rate: Joi.number().integer().min(1).max(5).required(),
    reviews: Joi.string().max(500).required(),
    isPrivate: Joi.boolean().required(),
});

export function validateAddFavMovies(req, res, next) {
    try {
      Joi.assert(req.body, ADD_FAV_MOVIES_SCHEMA);
  
      next();
    } catch (err) {
      next(err);
    }
}


  