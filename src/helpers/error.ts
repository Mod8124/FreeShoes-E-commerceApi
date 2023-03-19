import { IError, IErrorUser } from '../interface/interface';

export const Error: IError = {
  message: 'Sorry mate, something fail.',
  resolution: 'You can try again XD',
};

export const handleErrors = (err: any) => {
  const errors: IErrorUser = { email: '', password: '' };

  if (err.code === 11000) {
    errors.email = 'that email is already register';
  }

  if (err.message === 'incorrect email') {
    errors.email = 'email is incorrect';
  }

  if (err.message === 'incorrect password') {
    errors.password = 'password is incorrect';
  }

  if (err.message.includes('user validation failed')) {
    for (let prop in err.errors) {
      const path = err.errors[prop].properties.path;
      const message = err.errors[prop].properties.message;
      errors[path] = message;
    }
  }

  return errors;
};
