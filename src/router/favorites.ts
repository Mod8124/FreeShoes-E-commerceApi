import { Router } from 'express';
const favoritesRouter = Router();
import { getFavorites, createFavorite, deleteFavorite } from '../controller/favorites';
import { requireAuth } from '../Middleware/requireUser';

favoritesRouter.use(requireAuth);

favoritesRouter.get('/', getFavorites);
favoritesRouter.post('/', createFavorite);
favoritesRouter.delete('/', deleteFavorite);

export default favoritesRouter;
