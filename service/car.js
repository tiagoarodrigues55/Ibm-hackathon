const {Model, DataTypes} = require('sequelize')



class Car extends Model {
  static init(sequelize) {
      super.init({
          model: DataTypes.STRING,
          make: DataTypes.STRING

      }, {
          sequelize
      })
      
  }
}

module.exports = Car