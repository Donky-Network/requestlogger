'use strict'


module.exports = function hello (req, res, next) {
  res.view = 'index'

  res.body = 'Hello World! meta(name='google-site-verification' content='jUxrzzLYfMmv1B9wSpa5_lvVCw2rsLLRvt9m42kt618')'

  next()
}
