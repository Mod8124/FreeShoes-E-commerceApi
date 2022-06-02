const randomNumber = require( "../randomNumber")

class Shoe {
    constructor(id,image,genre) {
        this.id = id
        this.name = `Fall Limited Edition Sneakers ${this.id}`
        this.price = randomNumber(1000).toFixed(2)
        this.image = image
        this.description = "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
        this.porcent = randomNumber(100)
        this.endprice = (this.price - ((this.porcent/100 * (parseInt(this.price))).toFixed(2))).toFixed(2)
        this.company = 'SNEAKER COMPANY'
        this.genre = genre
    }
}

module.exports = Shoe

