var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('trips', {
  retrieve: new Method({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
  }),
  search: new Method({
    method: 'GET',
  }),
  getByIds: new Method({
    method: 'POST',
    path: '/getByIds',
  }),
  getTripsAfterDate: new Method({
    method: 'POST',
    path: '/getTripsAfterDate',
  }),
})
