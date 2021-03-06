'use strict'

const Connection = require('@xmpp/connection-tcp')

class ConnectionTCP extends Connection {
  socketParameters(uri) {
    const params = super.socketParameters(uri)
    if (!params) return params
    params.port = params.port || 5222
    return params
  }
}

ConnectionTCP.prototype.NS = 'jabber:client'

module.exports = ConnectionTCP
