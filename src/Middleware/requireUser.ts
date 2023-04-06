import { Response, NextFunction } from 'express';
import config from '../config/config';
import User from '../model/userModel';
import jwt from 'jsonwebtoken';
import featured from '../helpers/featured';
import { IRequestWithUser } from '../interface/interface';
const { REQUEST_TYPE_STATUS_CODE } = featured();

export const requireAuth = async (req: IRequestWithUser, res: Response, next: NextFunction) => {
  // verify user is authenticated
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(REQUEST_TYPE_STATUS_CODE.Unauthorized).json({ error: 'Authorization token required' });
  }

  try {
    const id = jwt.verify(token, config.JWT_KEY);
    const user = await User.findOne({ _id: id }).select('_id');
    if (user) req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(REQUEST_TYPE_STATUS_CODE.Unauthorized).json({ error: 'Request is not authorized' });
  }
};
