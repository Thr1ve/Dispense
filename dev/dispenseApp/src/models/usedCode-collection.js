let AmpCollection = require("./apiPointer.js")
let usedCode = require("./usedCode")

//this holds the requests for codes that the user
//has received

/*

  {
    "chatOrTicket": "",
    "customerEmail": "",
    "customerName": "",
    "productId": 0,
    "representative": "",
    "universityOrBusiness": "",
    "code": "",
    "date": "",
  }

      filter: {
        where: query,
        limit: 50,
        order: "date DESC"
      }
*/

module.exports = AmpCollection.extend({

  model: usedCode,

  location: "usedCode-collection",

  format (data) {

    let query = {
      where: data.where,
      limit: data.limit,
      order: data.order
    }

    console.log(query)

    return query
  },

  initialize() {
    AmpCollection.prototype.initialize.call(this)
  }
})
