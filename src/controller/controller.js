const load = require('../fetchdata/fetchShoes')

const {get,shoes} = load()

const index = async (req,res) => {
    try {
        res.status(200).send(shoes)
      } catch(err) {
        res.status(400).json({error:"try again"})
      }
}

const details = async (req,res) => {
  const {id} = req.params;
    try {
        if(id) {
       const shoe =   shoes.filter((shoesO) => shoesO.name === id)
          res.status(200).json(shoe)
        } 
      } catch(err) {
        res.status(400).json({error:'try again'})
      }
}

const getByWomen = async (req,res) => {
  try {
    const shoeByWomen = shoes.filter((shoe)=> shoe.genre === 'women')
    res.status(200).json(shoeByWomen)
  } catch(err) {
      console.log(err)
  }
}

const getByMen = async (req,res) => {
  try {
    const shoeByMen = shoes.filter((shoe)=> shoe.genre === 'men')
    res.status(200).json(shoeByMen)
  } catch(err) {
    console.log(err)
  }
}

module.exports = {
    index,
    details,
    getByMen,
    getByWomen
}