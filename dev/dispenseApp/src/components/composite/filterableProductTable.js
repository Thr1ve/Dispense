import React from 'react'
import SearchField from './../atomic/searchField.js'
import ProductTable from './../atomic/productTable.js'
import MostUsedProductsTable from './../atomic/mostUsedProductsTable.js'
import app from 'ampersand-app'

var FilterableProductTable = React.createClass({

    getInitialState() {
        return {
            data: [],
            filterText: ''
        }
    },

    componentDidMount() {
        var self = this

        app.on('clearText', () => {
          this.setState({filterText:''})
        })

        //if statement added since refetching products broke app after using back button
        //this should be handled differently...perhaps store in user state?
        if(app.products.models.length > 0){
            self.setState({data:app.products})
        }
        else{
            window.app.products.fetch({
                success:function(model, res, opt){
                    self.setState({data:res})
                }
            }),[]
        }
    },

    handleUserInput(filterText) {
        var filtered
        if(filterText){
            app.products.filter(filterText)
            filtered = app.products.filtered
        }
        else{
            filtered = app.products
        }

        this.setState({
            filterText: filterText,
            data : filtered
        })
    },

    render() {

        let products = (this.state.filterText.length > 0) ? 
          ( <ProductTable products={this.state.data}/> ) : ( <MostUsedProductsTable/> )

        return (
            <div>
                <div style={{position:'fixed', top:'0', left: '0', zIndex: '9' }} >
                    <SearchField
                        filterText={this.state.filterText}
                        onUserInput={this.handleUserInput}/>
                </div>
                <div>
                  {products}
                </div>
            </div>
        )
    }
})

module.exports = FilterableProductTable
