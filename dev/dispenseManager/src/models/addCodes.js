import AmpersandModel from "ampersand-model"

module.exports = AmpersandModel.extend({

    location: "availableCodes-collection/addCodes",

    initialize() {
        this.url = "http://localhost:8080/api/" + this.location
        console.log("url", this.url)
    },

    props: {
        productId: "any",
        codes: "array"
    },

    session: {},

    derived: {
        id() {
            return this.productId
        }
    }
})
