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

export interface IError {
  message: string;
  resolution: string;
}

export interface IPagination {
  prev: {
    [key: string]: number;
  };
  next: {
    [key: string]: number;
  };
}
