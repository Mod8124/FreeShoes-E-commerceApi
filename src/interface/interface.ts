import mongoose, { Model, Types } from 'mongoose';

export type TArrayString = string[];
export type TArrayNumber = number[];

export interface IShoe {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  discount: number;
  endprice: string;
  company: string;
  genre: string;
  type: string;
}

export type IData = Pick<IShoe, 'id' | 'name' | 'price' | 'image' | 'description'>;
export interface IShoeFactory {
  create(img: string): void;
}

export interface IPagination {
  prev: {
    [key: string]: number;
  };
  next: {
    [key: string]: number;
  };
}

// auth
export interface IUserSchema {
  _id: string;
  email: string;
  password: string;
  avatar: string;
}

export interface UserModel extends Model<IUserSchema> {
  signup(email: string, password: string): IUserSchema;
  login(email: string, password: string): IUserSchema;
}

//errors
export interface IError {
  message: string;
  resolution: string;
}
export interface IErrorUser {
  [key: string]: string;
}

export interface IErrorProperties {
  properties: {
    validator: [() => boolean];
    message: 'Min password length is 6 char';
    type: 'minlength';
    minlength: 6;
    path: 'password';
    value: '1';
  };
  kind: string;
  path: string;
  value: string;
  reason: undefined;
}
