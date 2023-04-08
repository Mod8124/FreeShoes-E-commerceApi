import { Router } from 'express';
const favoritesRouter = Router();
import { getFavorites, createFavorite, deleteFavorite } from '../controller/favorites';

favoritesRouter.get('/', getFavorites);
favoritesRouter.post('/', createFavorite);
favoritesRouter.delete('/:id', deleteFavorite);

export default favoritesRouter;
