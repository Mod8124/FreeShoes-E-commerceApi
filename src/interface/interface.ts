import { Model } from 'mongoose';
import { Request } from 'express';

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
  gender: string;
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

// model - auth
export interface IUserSchema {
  _id: string;
  email: string;
  password: string;
}

export interface UserModel extends Model<IUserSchema> {
  signup(email: string, password: string): IUserSchema;
  login(email: string, password: string): IUserSchema;
}

// model - favorite
type TFavorites = Pick<IShoe, 'id' | 'name' | 'image' | 'company'>;
export interface IFavoriteSchema {
  user_id: string;
  favorites: TFavorites[];
}

export interface FavoriteModel extends Model<IFavoriteSchema> {}

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

//request
export interface IRequestWithUser extends Request {
  user?: IUserSchema;
}
