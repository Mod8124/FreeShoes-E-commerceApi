import { Request, Response } from 'express';
import { IShoe } from '../interface/interface';
import shoes from '../shoes/shoes';

export const index = async (req: Request, res: Response) => {
  const DATA_LENGTH = 30;
  const START = 1;

  // let page:number= req.query.page || START
  // let limit: any = req.query.limit || DATA_LENGTH

  // if (limit > DATA_LENGTH) limit = DATA_LENGTH;
  // const startIndex = (page - 1) * limit;
  // const endIndex = page * limit;

  try {
    // let shoes = data.slice(startIndex, endIndex);
    res.status(200).send(shoes);
  } catch (err) {
    res.status(400).json({ error: 'try again' });
  }
};

export const detail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (id) {
      // const data: any = await get();
      // const shoes = data.filter((shoe: IShoe) => shoe.name === id);
      res.status(200).json('hola');
    }
  } catch (err) {
    res.status(400).json({ error: 'try again' });
  }
};

export const getByWomen = async (req: Request, res: Response) => {
  try {
    // const data: any = await get();
    // const shoeByWomen = data.filter((shoe: IShoe) => shoe.genre === 'Women');
    res.status(200).json('hola');
  } catch (err) {
    res.status(400).json({ error: 'try again' });
  }
};

export const getByMen = async (req: Request, res: Response) => {
  try {
    // const data: any = await get();
    // const shoeByMen = data.filter((shoe: IShoe) => shoe.genre === 'Men');
    res.status(200).json('hola');
  } catch (err) {
    res.status(400).json({ msg: 'Sorry, there is a problem' });
  }
};
