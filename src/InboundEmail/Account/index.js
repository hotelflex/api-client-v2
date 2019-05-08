var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('accounts', {
  create: new Method({
    method: 'POST',
    path: '/create',
  }),
})
