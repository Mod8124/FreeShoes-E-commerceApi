import { Request, Response } from 'express';
import { Error } from '../helpers/error';
import { getAllShoes, getAllShoesByGenre, getShoeByName } from '../services/shoesServices';
import { IPagination } from '../interface/interface';

// get all shoes
export const index = async (req: Request, res: Response) => {
  const { sort } = req.query;
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 15;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  let pagination: IPagination = {
    prev: {},
    next: {},
  };

  try {
    const allShoes = typeof sort === 'string' ? getAllShoes(sort) : getAllShoes(null);
    if (startIndex > 0) {
      pagination['prev'] = {
        page: page - 1,
        limit,
      };
    }

    if (endIndex < allShoes.length) {
      pagination['next'] = {
        page: page + 1,
        limit,
      };
    }
    const paginationShoes = allShoes.slice(startIndex, endIndex);
    res.status(200).send({ status: 'ok', total_shoes: allShoes.length, pagination, data: paginationShoes });
  } catch (err) {
    res.status(404).json({ status: 'failed', ...Error, err });
  }
};

// get single shoe
export const detail = async (req: Request, res: Response) => {
  const { shoeName } = req.params;
  try {
    if (shoeName) {
      const shoe = getShoeByName(shoeName);
      res.status(200).json({ status: 'Ok', total_shoes: shoe.length, data: shoe });
    }
  } catch (err) {
    res.status(404).json({ status: 'failed', ...Error, err });
  }
};

// get all shoes by women
export const getByWomen = async (req: Request, res: Response) => {
  try {
    const shoesByWomen = getAllShoesByGenre('Women');
    res.status(200).json({ status: 'OK', total_shoes: shoesByWomen.length, data: shoesByWomen });
  } catch (err) {
    res.status(404).json({ status: 'failed', ...Error, err });
  }
};

//get all shoes by men
export const getByMen = async (req: Request, res: Response) => {
  try {
    const shoesByMen = getAllShoesByGenre('Men');
    res.status(200).json({ status: 'Ok', total_shoes: shoesByMen.length, data: shoesByMen });
  } catch (err) {
    res.status(404).json({ status: 'failed', data: { ...Error, err } });
  }
};
