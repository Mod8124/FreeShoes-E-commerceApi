import { IError, IErrorUser } from '../interface/interface';

export const Error: IError = {
  message: 'Sorry mate, something fail.',
  resolution: 'You can try again XD',
};

export const handleErrors = (err: string) => {
  const errors: IErrorUser = { email: '', password: '' };
  console.log(err);
  if (err.includes('Email')) errors.email = err;

  if (err.includes('Password')) errors['password'] = err;

  return errors;
};
