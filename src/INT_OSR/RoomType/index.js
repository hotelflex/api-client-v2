var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('roomTypes', {
  update: new Method({
    method: 'POST',
    path: '/{id}',
    urlParams: ['id'],
  }),
})
