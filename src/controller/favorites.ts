import { Request, Response } from 'express';
import { IRequestWithUser } from '../interface/interface';

export const getFavorites = async (req: IRequestWithUser, res: Response) => {
  const user_id = req.user?._id;
  console.log(user_id);
  res.send('created');
};

export const createFavorite = (req: Request, res: Response) => {
  res.send('add favorite shoe');
};

export const deleteFavorite = (req: Request, res: Response) => {
  res.send('delete shoe');
};
