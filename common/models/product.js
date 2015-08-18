var app = require('../../server/server')

module.exports = function (Product) {

  Product.observe('before save', function (modelInstance, next) {

    var products = app.datasources.mydb.models.product
    var prodId = modelInstance.productId
    // var contacts = app.datasources.mydb.models.contact
    if (!prodId) {
      // console.log(modelInstance)
      console.log(products)
      console.log(products.length)
    }
    next()
  })
}
