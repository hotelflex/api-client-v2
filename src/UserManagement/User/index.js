var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('users', {
  add: new Method({
    method: 'POST',
    path: '/add',
  }),
  archive: new Method({
    method: 'POST',
    path: '/{id}/archive',
    urlParams: ['id'],
  }),
  updateByAccount: new Method({
    method: 'POST',
    path: '/updateByAccount',
  }),
  retrieveByAccount: new Method({
    method: 'GET',
    path: '/retrieveByAccount',
  }),
})
