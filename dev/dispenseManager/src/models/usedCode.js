import AmpersandModel from "ampersand-model"

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
