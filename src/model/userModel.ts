import mongoose, { model } from 'mongoose';
const schema = mongoose.Schema;
import bcrypt from 'bcrypt';
import { IUserSchema, UserModel } from '../interface/interface';
import validator from 'validator';

const userSchema = new schema<IUserSchema, UserModel>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email: string, password: string) {
  // validation
  if (!email && !password) {
    throw Error('Email & Password must be filled');
  } else if (!email || !password) {
    const fieldName = !email ? 'Email' : 'Password';
    throw Error(`${fieldName} must be filled`);
  }

  // validation email
  if (!validator.isEmail(email)) {
    throw Error('Email not valid');
  }

  // validation password
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }

  if (!/\d/.test(password)) {
    throw new Error('Password must include a number');
  }

  if (!/[A-Z]/.test(password)) {
    throw new Error('Password must include an uppercase letter');
  }

  if (
    !validator.isStrongPassword(password, {
      minLength: 6,
      minUppercase: 1,
      minSymbols: 0,
    })
  ) {
    throw new Error('Password not strong enough');
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error('Email already in use');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

userSchema.statics.login = async function (email: string, password: string) {
  // validation
  if (!email && !password) {
    throw Error('Email & Password must be filled');
  } else if (!email || !password) {
    const fieldName = !email ? 'Email' : 'Password';
    throw Error(`${fieldName} must be filled`);
  }

  // validation email
  if (!validator.isEmail(email)) {
    throw Error('Email not valid');
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error('Email is incorrect');
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error('Password is incorrect');
  }

  return user;
};

const User = model<IUserSchema, UserModel>('User', userSchema);

export default User;
