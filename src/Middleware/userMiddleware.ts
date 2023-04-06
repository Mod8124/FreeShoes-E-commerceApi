import jwt from 'jsonwebtoken';
import User from '../model/userModel';
import config from '../config/config';
import { Request, Response, NextFunction } from 'express';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, config.JWT_KEY, (err: any) => {
      if (err) {
        console.log(err.message);
        res.status(401).json({ status: 'failed', message: 'Invalid token' });
      } else {
        next();
      }
    });
  } else {
    return res.status(401).json({ status: 'failed', message: 'Unauthorized' });
  }
};
