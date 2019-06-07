var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('reports', {
  getAllMonthlyMetrics: new Method({
    method: 'GET',
    path: '/getAllMonthlyMetrics',
  }),
  getAllRRMs: new Method({
    method: 'GET',
    path: '/getAllRRMs',
  }),
  retrieveByHotel: new Method({
    method: 'GET',
    path: '/retrieveByHotel',
  }),
  retrievePlatform: new Method({
    method: 'GET',
    path: '/retrievePlatform',
  }),
})
