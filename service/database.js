const Sequelize = require('sequelize')
const dbConfig = require('./databaseConfig')

const Car = require('./car')



const connection = new Sequelize(dbConfig)

Car.init(connection)





module.exports = connection