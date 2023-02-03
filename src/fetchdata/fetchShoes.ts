import axios from "axios";
import shoes from "../shoes/shoes";
import randomNumber from "../helpers/randomNumber";
import KEY from "../config";
import featured from "../helpers/featured";
const { genres, types, brands } = featured();

const options = {
    method: 'GET',
    url: 'https://shoes-collections.p.rapidapi.com/shoes',
    headers: {
      'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com',
      'X-RapidAPI-Key': `${KEY}`
    }
}

const get = async () => {
    try {
        const {data} = await axios.request(options);
        if(data) {
          data.map((shoe:any) => {
            shoe.price = shoe.price.toFixed(2);
            shoe.porcent = randomNumber(100);
            // shoe.endprice = (shoe.price - ((shoe.porcent/100 * (parseInt(shoe.price))).toFixed(2))).toFixed(2);
            shoe.endprice = (shoe.price - ( (shoe.porcent/100) * parseFloat(shoe.price))).toFixed(2);
            shoe.company = brands[randomNumber(brands.length)];
            shoe.genre = genres[randomNumber(2)];
            shoe.type = types[randomNumber(types.length)];
                     
            if(shoes.length<31) shoes.push(shoe);

          });
        } 
        return shoes;
    } catch (err) {
        if (err) return shoes;
        console.log(err);
    }
}

export default get;
