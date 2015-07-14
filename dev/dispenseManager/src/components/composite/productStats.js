import React from "react"

// var log = require("bows")("productStats.js");

let ProductStats = React.createClass({
  render() {
    let { isbn13, title } = this.props.product
    return (
      <div>
        <p>Product Stats:</p>
        <br></br>
        <p> {isbn13} </p>
        <p> {title} </p>
      </div>
    )
  }
})

module.exports = ProductStats
