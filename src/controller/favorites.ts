import { Response } from 'express';
import { MyRequest } from '../Middleware/requireUser';
import favoritesServices from '../services/favoritesServices';

export const getFavorites = async (req: MyRequest, res: Response) => {
  favoritesServices.getFavorites(req, res);
};

export const createFavorite = async (req: MyRequest, res: Response) => {
  favoritesServices.addFavorites(req, res);
};

export const deleteFavorite = async (req: MyRequest, res: Response) => {
  favoritesServices.deleteFavorite(req, res);
};
