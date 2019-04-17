var Entity = require('../Entity')
var SystemManager = require('./SystemManager')
var Trip = require('./Trip')

module.exports = new Entity('TRP', {
  SystemManager: SystemManager,
  Trip: Trip,
})
