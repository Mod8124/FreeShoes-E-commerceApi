import { Request, Response } from 'express';
import shoesServices from '../services/shoesServices';

// get all shoes
export const index = async (req: Request, res: Response) => {
  shoesServices.getShoes(req, res);
};

// get single shoe
export const detail = async (req: Request, res: Response) => {
  shoesServices.getSingleShoe(req, res);
};

// get all shoes by women
export const getByWomen = async (req: Request, res: Response) => {
  shoesServices.getShoesByWomen(req, res);
};

//get all shoes by men
export const getByMen = async (req: Request, res: Response) => {
  shoesServices.getShoesByMen(req, res);
};
