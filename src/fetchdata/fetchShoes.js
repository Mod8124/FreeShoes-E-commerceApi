const axios = require('axios');
const shoes = require('../shoes/shoes');
const randomNumber = require('../randomNumber')

const options = {
    method: 'GET',
    url: 'https://shoes-collections.p.rapidapi.com/shoes',
    headers: {
      'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com',
      'X-RapidAPI-Key': '5ce18c3657msha744b3ae8b3cc14p136d4bjsnfe9991133fd5'
    }
  };

  const genre = ['men','women'];

  const get = async () => {
            
       try {
        const {data} = await axios.request(options)
        if(data) {
            data.map(shoe => {
                shoe.price = shoe.price.toFixed(2)
                shoe.porcent = randomNumber(100);
                shoe.endprice = (shoe.price - ((shoe.porcent/100 * (parseInt(shoe.price))).toFixed(2))).toFixed(2)
                shoe.company = 'SNEAKER COMPANY'
                shoe.genre = genre[randomNumber(2)],
                shoes.push(shoe)
            })
            return shoes
        } 
       } catch(err) {
           if(err) {
               return shoes
           }
           console.log(err.message)
       }

       return shoes
 
}

module.exports = get;