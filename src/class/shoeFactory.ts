import Shoe from './shoeClass';
import { IShoeFactory } from '../interface/interface';
import { IShoe } from '../interface/interface';

export const shoes: IShoe[] = [];

class ShoeFactory implements IShoeFactory {
  create(img: string) {
    return new Shoe(shoes.length, img);
  }
}

export default ShoeFactory;
