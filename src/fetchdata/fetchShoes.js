const axios = require('axios');
const shoes = require('../shoes/shoes');
const randomNumber = require('../randomNumber')
const KEY =  require('../../config.js')

const options = {
    method: 'GET',
    url: 'https://shoes-collections.p.rapidapi.com/shoes',
    headers: {
      'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com',
      'X-RapidAPI-Key': `${KEY}`
    }
  };

  const genre = ['men','women'];

const load = () => {

    const get = async () => {
            
        try {
         const {data} = await axios.request(options)
         if(data && shoes.length <= 32) {
             data.map(shoe => {
                 shoe.price = shoe.price.toFixed(2)
                 shoe.porcent = randomNumber(100);
                 shoe.endprice = (shoe.price - ((shoe.porcent/100 * (parseInt(shoe.price))).toFixed(2))).toFixed(2)
                 shoe.company = 'SNEAKER COMPANY'
                 shoe.genre = genre[randomNumber(2)]
                 
                shoes.push(shoe)
             })
         } 
        } catch(err) {
            if(err) {
                return shoes
            }
            console.log(err.message)
        }
 }
 return {
    shoes,
    get
}
}

module.exports = load;