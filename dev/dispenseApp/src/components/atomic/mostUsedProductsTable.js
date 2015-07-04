import React from 'react'
import Router from 'react-router'
import mui from 'material-ui'
import app from 'ampersand-app'

let { Menu } = mui;

let MostUsedProductsTable = React.createClass({

  contextTypes: {
      router: React.PropTypes.func
  },

  getInitialState() {
    return {
      data : []
    }
  },

  componentDidMount() {
    if(app.products){
      this.setState({data:app.products})
    }
  },

  _onItemClick: function(e, key, menuItem) {
    let { router } = this.context;
    router.transitionTo('requestCode', { productId: menuItem.payload});
  },

  render: function() {
    let rows = [];
    console.log(this.state.data)
    // TODO: this forEach needs to be done over an array of products sorted by "most used"
    this.state.data.forEach(function(product) {
      rows.push({payload: product.productId, text: product.title, data: product.isbn13})
    }.bind(this));

    return (
      <div>
        <div> Most Used Codes...</div>
        <Menu menuItems={rows} onItemClick={this._onItemClick}/>
      </div>
    );
  }

});

module.exports = MostUsedProductsTable;
