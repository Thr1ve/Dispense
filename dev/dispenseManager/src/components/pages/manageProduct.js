import app from 'ampersand-app'
import React from 'react'
import Router from 'react-router'
let { Route, RouteHandler, DefaultRoute } = Router

import Mui from 'material-ui'
var { FlatButton } = Mui

// var log = require('bows')("manageProduct.js");

let ManageProduct = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

	getInitialState() {
        return {
            productId: this.props.params.productId,
        };
    },

    componentDidMount() {
        let self = this;
        app.products.getOrFetch(this.props.params.productId,
            {all: true}, 
            function(err, model){
                if(err){
                    console.error('model not found', err)
                }
                self.setState({product:model})
        });
    },


    toEditProduct() {
        let { productId } = this.state
        let { router } = this.context
        router.transitionTo('editProduct', {productId:productId})
    },

    toAddCodes() {
        let { productId } = this.state
        let { router } = this.context
        router.transitionTo('addCodes', {productId:productId})
    },

    toProductStats() {
        let { productId } = this.state
        let { router } = this.context
        router.transitionTo('productStats', {productId:productId})
    },

    render() {

        let buttonStyle = {
          height: '50',
          opacity:'0.9',
          float:'right'
        }

    	let { productId } = this.state
        if(this.state.product){
        	return (
    	        <div>
    		        <div style={{position:'fixed', top:'0', left: '0', zIndex: '9' }} >
                        <FlatButton label='Stats'
                          style={buttonStyle}
                          onClick={this.toProductStats}
                          secondary={true} />
                        <FlatButton label='Edit Product'
                          style={buttonStyle}
                          onClick={this.toEditProduct}
                          secondary={true} />
                        <FlatButton label='Add Codes'
                          style={buttonStyle}
                          onClick={this.toAddCodes}
                          secondary={true} />
    		        </div>
    	            <RouteHandler  {...this.state}/>
    	        </div>
        	)
        }
        else{
            return (
                <div>
                    LOADING PRODUCT...
                </div>       
            ) 
        }
    }

});

module.exports = ManageProduct