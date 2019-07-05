var Entity = require('../Entity')
var Integration = require('./Integration')
var RoomType = require('./RoomType')

module.exports = new Entity('INT_OSR', {
  Integration: Integration,
  RoomType: RoomType,
})
