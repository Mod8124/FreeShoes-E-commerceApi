import Shoe from './shoeClass';
import { IShoeFactory } from '../interface/interface';

class ShoeFactory implements IShoeFactory {
    create(id:number, img:string) {
        return new Shoe(id, img);
    } 
}

export default ShoeFactory;
