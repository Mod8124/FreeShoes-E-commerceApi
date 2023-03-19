import jwt from 'jsonwebtoken';
import User from '../model/userModel';
import config from '../config/config';
import { Request, Response, NextFunction } from 'express';

export const checkUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, config.JWT_KEY, async (err: any, decodedToken: any) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};
