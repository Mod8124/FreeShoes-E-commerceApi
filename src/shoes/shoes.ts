import randomNumber from '../helpers/randomNumber';
import ShoeFactory, { shoes } from '../class/shoeFactory';
import featured from '../helpers/featured';
const { PRICES, GENDER, imgsLinks } = featured();
import { IShoe } from '../interface/interface';

const shoesDefault: IShoe = {
  id: 1,
  name: 'Fall Limited Edition Sneakers',
  price: '255.00',
  image:
    'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  discount: PRICES[1],
  endprice: '125.00',
  company: 'SNEAKER COMPANY',
  gender: GENDER[randomNumber(2)],
  type: 'Lifestyle',
};

shoes.push(shoesDefault);

// create a shoeFactory
const shoeFactory = new ShoeFactory();

const createShoe = (img: string) => shoeFactory.create(img);

imgsLinks.forEach((img) => createShoe(img));

export default shoes;
