import { Request, Response } from 'express';
import userServices from '../services/userServices';

export const logIn = async (req: Request, res: Response) => {
  userServices.logIn(req, res);
};

export const signUp = async (req: Request, res: Response) => {
  userServices.register(req, res);
};
