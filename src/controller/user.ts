import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import featured from '../helpers/featured';
import User from '../model/userModel';
import { handleErrors } from '../helpers/error';
const { REQUEST_TYPE_STATUS_CODE } = featured();
const maxDay = 3 * 24 * 60 * 60;

const createToken = (email: string) => {
  return jwt.sign({ email }, config.JWT_KEY, { expiresIn: maxDay });
};

export const logIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxDay * 1000 });
    res.status(REQUEST_TYPE_STATUS_CODE.ok).json({ status: 'Ok', user: { email, token } });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(REQUEST_TYPE_STATUS_CODE.Unauthorized).json({ status: 'unauthorized', errors });
  }
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw Error('All fields must be filled');
    const user = await User.create({ email, password });
    const token = createToken(user.email);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxDay * 1000 });
    res.status(REQUEST_TYPE_STATUS_CODE.created).json({ status: 'Created', user: { email, token } });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(406).json({ status: 'failed', errors });
  }
};

export const updateFavorites = async (req: Request, res: Response) => {
  try {
    res.send('works');
  } catch (err) {
    res.send('failed');
  }
};

export const logout = async (req: Request, res: Response) => {
  res.cookie('jwt', '', { maxAge: 1, httpOnly: true });
  res.status(REQUEST_TYPE_STATUS_CODE.ok).json({ status: 'Ok' });
};
