import { Request, Response } from 'express';

export const getFavorites = async (req: Request, res: Response) => {
  res.send('all favorites Shoes');
};

export const createFavorite = (req: Request, res: Response) => {
  res.send('add favorite shoe');
};

export const deleteFavorite = (req: Request, res: Response) => {
  res.send('delete shoe');
};
