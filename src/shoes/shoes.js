const randomNumber = require('../randomNumber');
const Shoe = require('../class/shoeClass')
const genre = ['men','women']

const prices = [250.00,50,125.00]

const shoes = [
    {id:0,name:"Fall Limited Edition Sneakers",price:prices[0].toFixed(2), image:"https://i.ibb.co/d4nQvGh/image-product-1.jpg",description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",porcent:prices[1],endprice:prices[2].toFixed(2),company:"SNEAKER COMPANY",
    genre:genre[randomNumber(2)],
    }
]

const shoe1 = new Shoe(26, 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', genre[randomNumber(2)])
const shoe2 = new Shoe(27, 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', genre[randomNumber(2)])
const shoe3 = new Shoe(28, 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80',genre[randomNumber(2)])
const shoe4 = new Shoe(29, 'https://images.unsplash.com/photo-1547586877-0351a7143cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', genre[randomNumber(2)])
const shoe5 = new Shoe(30, 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', genre[randomNumber(2)])
const shoe6 = new Shoe(31, 'https://images.unsplash.com/photo-1590673846749-e2fb8f655df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',genre[randomNumber(2)])

shoes.push(shoe1)
shoes.push(shoe2)
shoes.push(shoe3)
shoes.push(shoe4)
shoes.push(shoe5)
shoes.push(shoe6)

module.exports = shoes;
