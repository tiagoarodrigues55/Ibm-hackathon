const Car = require('./Car')

module.exports = {
  async index(req, res){
    const car = await Car.findAll()

        return res.json(car)
  },

  async Storage(req, res){
    const { make, model } = req.body

    const car = await Car.create({ make, model })

    return res.json(car)
  }
}