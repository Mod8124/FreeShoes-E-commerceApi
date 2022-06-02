const get = require('../fetchdata/fetchShoes')

const index = async (req,res) => {
    try {
        const data = await get()
        res.status(200).send(data)
      } catch(err) {
        res.status(400).json({error:"try again"})
      }
}

const details = async (req,res) => {
    try {
        const data = await get()
        const {id} = req.params;
        if(id) {
       const shoe =   data.filter((shoes) => shoes.name === id)
          res.status(200).json(shoe)
        } 
      } catch(err) {
        res.status(400).json({error:'try again'})
      }
}

const getByWomen = async (req,res) => {
  try {
    const data = await get()
    const shoeByWomen = data.filter((shoe)=> shoe.genre === 'women')
    res.status(200).json(shoeByWomen)
  } catch(err) {
      console.log(err)
  }
}

const getByMen = async (req,res) => {
  try {
    const data = await get()
    const shoeByMen = data.filter((shoe)=> shoe.genre === 'men')
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