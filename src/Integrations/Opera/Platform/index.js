var Entity = require('../../../Entity')
var Method = require('../../../Method')

module.exports = new Entity('', {
  globalHealth: new Method({
    method: 'GET',
    path: '/globalHealth',
  }),
})
