var Entity = require('../../Entity')
var SystemManager = require('./SystemManager')
var Platform = require('./Platform')

module.exports = new Entity('OPERA', {
  SystemManager: SystemManager,
  Platform: Platform,
})
