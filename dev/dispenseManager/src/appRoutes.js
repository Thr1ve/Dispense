import MainSearch from './components/pages/mainSearch.js'
import ManageProduct from './components/pages/manageProduct.js'
import EditProduct from './components/composite/editProduct.js'
import AddCodes from './components/composite/addCodes.js'
import ProductStats from './components/composite/productStats.js'
import AddProduct from './components/composite/addProduct.js'

import Mui from 'material-ui'
let { FlatButton } = Mui

import React from 'react'
import Router from 'react-router'
let { Route, RouteHandler,
    DefaultRoute, NotFoundRoute } = Router


// var log = require('bows')("appRoutes.js");

let NotFound = React.createClass({
    render() {
        return ( < h1 > No Route Found </h1>
    );
  }
});

let App = React.createClass({

  contextTypes: {
      router: React.PropTypes.func
  },

  toMainSearch() {
      var { router } = this.context;
      router.transitionTo('mainSearch');
  },

  toAddProduct(){
    var { router } = this.context;
    router.transitionTo('addProduct');
  },

  render() {

    let buttonStyle = {
      height: '50',
      opacity:'0.9',
      float:'right'
    }

    return (
    <div>
      <header style={{
        position:'fixed',
        top:'0', left: '0',
        width: '100%', height:'50px',
        opacity: '0.8', backgroundColor: 'white',
        zIndex: '4' }} >
        <FlatButton label='Add New Product'
          style={buttonStyle}
          onClick={this.toAddProduct}
          secondary={true} />
        <FlatButton label='Main Search'
          style={buttonStyle}
          onClick={this.toMainSearch}
          secondary={true} />
      </header>
      <div style={{position:'relative', top:'50px'}}>
        <RouteHandler {...this.props}/ >
      </div>
    </div >
        );
    }
});

module.exports = (
          <Route name="app" path="/dispenseManager" handler={App}>
            <Route name="mainSearch" handler={MainSearch}/>
            <Route name="addProduct" handler={AddProduct}/>
            <Route name='product' path="product/:productId" handler={ManageProduct}>
              <Route name="editProduct" handler={EditProduct}/>
              <Route name="addCodes" handler={AddCodes}/>
              <Route name="productStats" handler={ProductStats}/>
              <DefaultRoute handler={EditProduct}/>
            </Route>
            <DefaultRoute handler={MainSearch}/>
            <NotFoundRoute handler={NotFound}/>
          </Route>
        );