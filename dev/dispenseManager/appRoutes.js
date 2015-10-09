import MainSearch from './pages/mainSearch.js'
import ManageProduct from './pages/manageProduct.js'
import EditProduct from './../components/molecules/editProduct.js'
import AddCodes from './../components/molecules/addCodes.js'
import ProductStats from './../components/molecules/productStats.js'
import AddProduct from './pages/addProduct.js'
import Changelog from '../components/atoms/changelog.js'

import React from 'react'
import Router from 'react-router'

import Mui from 'material-ui'

import Keybindings from 'react-side-effect-mousetrap'

let { MenuItem, LeftNav, FlatButton } = Mui
// let ThemeManager = new Mui.Styles.ThemeManager()

let { Route, RouteHandler,
    DefaultRoute, NotFoundRoute, Redirect } = Router

let menuItems = [
  {
    type: MenuItem.Types.LINK,
    payload: 'changelog',
    text: 'Changelog'
  },
  {
    type: MenuItem.Types.LINK,
    payload: 'https://trello.com/b/9DTy6SXm/dispense',
    text: 'Trello',
    target: '_blank'
  }
]

let NotFound = React.createClass({
  render () {
    return (
      <h1> No Route Found </h1>
    )
  }
})

let App = React.createClass({

  mixins: [Router.State],

  contextTypes: {
    router: React.PropTypes.func
  },

// **
// Needed for Material-ui
  // childContextTypes: {
  //   muiTheme: React.PropTypes.object
  // },
  //
  // getChildContext () {
  //   return {
  //     muiTheme: ThemeManager.getCurrentTheme()
  //   }
  // },
// **

  getInitialState () {
    return {
      location: '',
      isDocked: false
    }
  },

  toMainSearch () {
    var { router } = this.context
    router.transitionTo('mainSearch')
  },

  toAddProduct () {
    var { router } = this.context
    router.transitionTo('addProduct')
  },

  feedback () {
    window.open('mailto:gbuler@wiley.com?subject=Dispense%20Feedback', '_blank')
  },

  keyMap () {
    return {
      'esc': () => {this.toggleNav()}
    }
  },

  toggleNav () {
    this.refs.leftNav.toggle()
    this.setState({
      isDocked: !this.state.isDocked
    })

    // fix material-ui
    // https://github.com/callemall/material-ui/issues/897
    document.body.style.overflow = 'auto'
  },

  render () {

    let buttonStyle = {
      height: '50',
      opacity: '0.9',
      float: 'right'
    }

    return (
      <Keybindings keyMap={{
        'esc': (e) => {
          e.preventDefault()
          this.toggleNav()
        },
        'tab': (e) => {e.preventDefault()},
        'shift+tab': (e) => {e.preventDefault()}
      }}>
        <div>
          <div style={{zIndex: 10, position: 'fixed', right: '0', top: '0'}}>
            <FlatButton label='Add New Product'
              style={buttonStyle}
              onClick={this.toAddProduct}
              secondary={true} />
            <FlatButton label='Main Search'
              style={buttonStyle}
              onClick={this.toMainSearch}
              secondary={true} />
            <FlatButton label='Feedback'
              style={buttonStyle}
              onClick={this.feedback}
              secondary={true} />
          </div>
          <div style={{position: 'relative', top: '50px'}}>
            <RouteHandler {...this.props} toggleNav={this.toggleNav}/>
          </div>
          <LeftNav ref='leftNav' docked={this.state.isDocked} menuItems={menuItems}/>
        </div >
      </Keybindings>
        )
  }
})

module.exports = (
          <Route name='app' path='/dispenseManager/' handler={App}>
            <Redirect from='/dispenseManager' to='/dispenseManager/'/>
            <Route name='mainSearch' handler={MainSearch}/>
            <Route name='addProduct' handler={AddProduct}/>
            <Route name='product' path='product/:productId' handler={ManageProduct}>
              <Route name='editProduct' handler={EditProduct}/>
              <Route name='addCodes' handler={AddCodes}/>
              <Route name='productStats' handler={ProductStats}/>
              <DefaultRoute handler={EditProduct}/>
            </Route>
            <Route name='changelog' path='changelog' handler={Changelog}/>
            <DefaultRoute handler={MainSearch}/>
            <NotFoundRoute handler={NotFound}/>
          </Route>
        )
