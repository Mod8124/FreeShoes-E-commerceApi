const Shoe = require('./shoeClass')

class ShoeFactory {
    create(id, img, genre) {
        return new Shoe(id,img,genre) 
    }
}

module.exports = ShoeFactory;