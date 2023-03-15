import randomNumber from '../helpers/randomNumber';
import featured from '../helpers/featured';
import { IShoe } from '../interface/interface';
const { GENRES, SEASONS, TYPES, BRANDS } = featured();
const randomGenre = (): string => GENRES[randomNumber(2)];
const randomSeason = (): string => SEASONS[randomNumber(SEASONS.length)];
const randomTypes = (): string => TYPES[randomNumber(TYPES.length)];
const randomBrands = (): string => BRANDS[randomNumber(BRANDS.length)];

class Shoe implements IShoe {
  public id: number;
  public name: string;
  public price: string;
  public image: string;
  public description: string;
  public discount: number;
  public endprice: any;
  public company: string;
  public genre: string;
  public type: string;

  constructor(id: number, image: string) {
    this.id = id;
    this.name = `${randomSeason() + ' Limited Edition Sneakers' + this.id}`;
    this.price = randomNumber(1000).toFixed(2);
    this.image = image;
    this.description =
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.";
    this.discount = randomNumber(100);
    this.endprice = this.calculateEndPrice();
    this.company = randomBrands();
    this.genre = randomGenre();
    this.type = randomTypes();
  }

  calculateEndPrice() {
    return Math.ceil(parseInt(this.price) - (this.discount / 100) * parseInt(this.price)).toString() + '.00';
  }
}

export default Shoe;
