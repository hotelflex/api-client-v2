var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('reports', {
  getSummary: new Method({
    method: 'GET',
    path: '/getSummary',
  }),
})
