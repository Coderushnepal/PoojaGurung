import { Router } from 'express';
import * as endpoints from '../src/constants/endpoints';
import * as userController from '../src/controllers/User';
import * as favouriteController from '../src/controllers/Favourites';
import jwtAuthenticate from './middlewares/jwtAuthenticate';
import { validateUserCreation, validateUserLogin } from '../src/schemas/User';
import { validateAddFavMovies } from '../src/schemas/FavouriteMovies';


const routes = Router();

routes.post(endpoints.CREATE_USER, validateUserCreation, userController.createUser);

routes.post(endpoints.LOGIN, validateUserLogin, userController.login);

routes.get(endpoints.GET_ALL_FAV_MOVIES,jwtAuthenticate,  favouriteController.getAllFavMovies);

routes.post(endpoints.ADD_FAV_MOVIES,jwtAuthenticate, validateAddFavMovies, favouriteController.addFavMovies);

export default routes;