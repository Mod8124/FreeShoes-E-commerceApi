import mongoose, { model } from 'mongoose';
const schema = mongoose.Schema;
import bcrypt from 'bcrypt';
import { IUserSchema, UserModel } from '../interface/interface';
import validator from 'validator';

const userSchema = new schema<IUserSchema, UserModel>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: [validator.isEmail, 'please enter a valid format email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    unique: true,
    minlength: [6, 'Min password length is 6 char'],
    validate: [validator.isStrongPassword, 'Password not strong enough'],
  },
});

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email: string, password: string) {
  if (!email || !password) throw Error('All fields must be filled');

  const user = await this.findOne({ email });
  if (!user) {
    throw Error('Incorrect email');
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error('Incorrect password');
  }

  return user;
};

const User = model<IUserSchema, UserModel>('User', userSchema);

export default User;
