const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('surface_mariadb_rds', 'admin', 'Surface-netflix-321', {
  host: 'surface-mariadb-rds.cl60bcyfcprk.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',
  port: 3306,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
