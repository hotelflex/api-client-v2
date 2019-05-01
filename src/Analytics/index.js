var Entity = require('../Entity')
var SystemManager = require('./SystemManager')
var Interaction = require('./Interaction')
var Report = require('./Report')

module.exports = new Entity('ANYL', {
  SystemManager: SystemManager,
  Interaction: Interaction,
  Report: Report,
})
