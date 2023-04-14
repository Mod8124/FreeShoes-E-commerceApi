import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import featured from '../helpers/featured';
import User from '../model/userModel';
import { handleErrors } from '../helpers/error';
const { REQUEST_TYPE_STATUS_CODE } = featured();
const maxDay = 3 * 24 * 60 * 60;

const createToken = (_id: string) => {
  return jwt.sign({ _id }, config.JWT_KEY, { expiresIn: maxDay });
};

const logIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    console.log(token);
    res.status(REQUEST_TYPE_STATUS_CODE.ok).json({ status: 'Ok', user: { email, token } });
  } catch (err: any) {
    const errors = handleErrors(err.message);
    setTimeout(() => res.status(REQUEST_TYPE_STATUS_CODE.Unauthorized).json({ status: 'unauthorized', errors }), 7000);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.signup(email, password);
    const token = createToken(user._id);
    res.status(REQUEST_TYPE_STATUS_CODE.created).json({ status: 'Created', user: { email, token } });
  } catch (err: any) {
    const errors = handleErrors(err.message);
    res.status(406).json({ status: 'failed', errors });
  }
};

export default {
  logIn,
  register,
};
