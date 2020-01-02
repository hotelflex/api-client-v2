var Entity = require('../../Entity')
var Method = require('../../Method')

module.exports = new Entity('webhooks', {
  unsubscribeEmail: new Method({
    method: 'POST',
    path: '/unsubscribe-email',
  }),
  unsubscribePhone: new Method({
    method: 'POST',
    path: '/unsubscribe-phone',
  }),
})
