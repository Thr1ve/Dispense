let AmpersandModel = require("ampersand-model")

//this is the request model.
//when a representative requests a code, a new request model is created,
//sent to the server, and returned with a code

module.exports = AmpersandModel.extend({
  props: {
    productId: "any",
    customerName: "string",
    customerEmail: "string",
    universityOrBusiness: "string",
    representative: "string",
    chatOrTicket: "string",
    date: "string",
    code: "string"
  }
})
