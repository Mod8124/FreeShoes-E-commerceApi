import Shoe from './shoeClass';
import { IShoeFactory } from '../interface/interface';
import { IShoe } from '../interface/interface';

export const shoes: IShoe[] = [];

class ShoeFactory implements IShoeFactory {
  create(img: string) {
    const newShoe = new Shoe(shoes.length, img);
    shoes.push(newShoe);
  }
}

export default ShoeFactory;
