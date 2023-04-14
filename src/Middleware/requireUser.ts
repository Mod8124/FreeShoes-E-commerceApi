import { Response, NextFunction } from 'express';
import { IncomingHttpHeaders } from 'http';
import config from '../config/config';
import User from '../model/userModel';
import jwt from 'jsonwebtoken';
import featured from '../helpers/featured';
import { IRequestWithUser } from '../interface/interface';
const { REQUEST_TYPE_STATUS_CODE } = featured();

export type MyRequest = IRequestWithUser & { headers: IncomingHttpHeaders & { authorization?: string } };

export const requireAuth = async (req: MyRequest, res: Response, next: NextFunction) => {
  // verify user is authenticated

  const authorization = req.headers?.authorization;

  if (!authorization) {
    return res.status(REQUEST_TYPE_STATUS_CODE.Unauthorized).json({ error: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];

  try {
    const id = jwt.verify(token, config.JWT_KEY);
    const user = await User.findOne({ _id: id }).select('_id');
    if (user) req.user = user;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      // handle expired token error
      res.status(REQUEST_TYPE_STATUS_CODE.Unauthorized).json({ error: 'Token has expired' });
    } else {
      // handle other errors
      console.log(error);
      res.status(REQUEST_TYPE_STATUS_CODE.Unauthorized).json({ error: 'Request is not authorized' });
    }
  }
};
