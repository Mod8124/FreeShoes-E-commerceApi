import get from '../fetchdata/fetchShoes';
import { Request, Response } from 'express';
import { IShoe } from '../interface/interface';

export const index = async (req: Request, res: Response) => {
  const DATA_LENGTH = 30;
  const START = 1;
  // const isNumber = /^[0-9]*$/;

  let page: any = req.query.page || START;
  let limit: any = req.query.limit || DATA_LENGTH;

  // if(page.match(isNumber) === false && limit.match(isNumber) === false || page.match(isNumber) || limit.match(isNumber)) {
  //   res.status(400).send('<h1 style="text-align:center; width:100%;">Sorry, for make a request with page you need to use <span style="color:red;">limit</span>, check the <a href="https://github.com/Mod8124/ecomerce-node.git">documention</a> for more information</h1>')
  // }

  if (limit > DATA_LENGTH) limit = DATA_LENGTH;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  try {
    const data: any = await get();
    let shoes = data.slice(startIndex, endIndex);
    res.status(200).send(shoes);
  } catch (err) {
    res.status(400).json({ error: 'try again' });
  }
};

export const detail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (id) {
      const data: any = await get();
      const shoes = data.filter((shoe: IShoe) => shoe.name === id);
      res.status(200).json(shoes);
    }
  } catch (err) {
    res.status(400).json({ error: 'try again' });
  }
};

export const getByWomen = async (req: Request, res: Response) => {
  try {
    const data: any = await get();
    const shoeByWomen = data.filter((shoe: IShoe) => shoe.genre === 'Women');
    res.status(200).json(shoeByWomen);
  } catch (err) {
    res.status(400).json({ error: 'try again' });
  }
};

export const getByMen = async (req: Request, res: Response) => {
  try {
    const data: any = await get();
    const shoeByMen = data.filter((shoe: IShoe) => shoe.genre === 'Men');
    res.status(200).json(shoeByMen);
  } catch (err) {
    res.status(400).json({ msg: 'Sorry, there is a problem' });
  }
};
