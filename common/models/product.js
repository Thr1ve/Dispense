var app = require('../../server/server')

module.exports = function (Product) {

  Product.observe('before save', function (modelInstance, next) {

    var products = app.datasources.rethinkdb.models.product
    var prodId = modelInstance.instance ? modelInstance.instance.productId : modelInstance.data.productId
    var contacts = app.datasources.rethinkdb.models.contact

    if (prodId) {
      next()
    } else {
      products.count(function (err, count) {

        if (err) { throw err }

        contacts.create({productId: count + 1}, function (err) {
          if (err) {throw err}

          var copy = modelInstance
          copy.instance.productId = count + 1
          modelInstance = copy

          next()
        })
      })
    }
  })
}
