import randomNumber from "../helpers/randomNumber";
import featured from '../helpers/featured';
import { IShoe } from "../interface/interface";
const { genres, seasons, types, brands } = featured();


const randomGenre = ():string => genres[randomNumber(2)];
const randomSeason = ():string => seasons[randomNumber(seasons.length)];
const randomTypes = ():string => types[randomNumber(types.length)];
const randomBrands = ():string => brands[randomNumber(brands.length)];

class Shoe implements IShoe  {

    public id :number
    public name : string
    public price : string
    public image : string
    public description: string
    public porcent: number; 
    public endprice:any;
    public company: string;
    public genre: string;
    public type: string;

    constructor (id:number, image: string) {
        this.id = id;
        this.name = `${randomSeason()+' Limited Edition Sneakers' + this.id}`;
        this.price = randomNumber(1000).toFixed(2);
        this.image = image;
        this.description = 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.';
        this.porcent = randomNumber(100);
        this.endprice =  (parseInt(this.price) - (this.porcent / 100 * parseInt(this.price))).toFixed(2);
        this.company = randomBrands();
        this.genre = randomGenre();
        this.type = randomTypes();   
    }
};

export default Shoe;