'use strict'

module.exports = require('require-directory')(module)

module.exports = function hello (req, res, next) {
  res.view = 'index'

  res.body = 'Hello World!'

  next()
}
