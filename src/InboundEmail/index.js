var Entity = require('../Entity')
var Account = require('./Account')

module.exports = new Entity('INB-EMAIL', {
  Account: Account,
})
