export type TarrayString = string[];
export type TarrayNumber = number[];

export interface IShoe  {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
    porcent: number;
    endprice: any;
    company: string;
    genre: string;
    type: string;
};

export interface IShoeFactory {
    create(id:number, img:string):IShoe
};

export interface Idata {
    id:number;
    name:string;
    price:string;
    image:string;
    description:string;
}