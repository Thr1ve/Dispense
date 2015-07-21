import MainSearch from './components/pages/mainSearch.js'
import RequestCode from './components/pages/requestCode.js'
import RequestedCodes from './components/pages/requestedCodes.js'
import SearchUsedCodes from './components/pages/searchUsedCodes.js'
import Changelog from './components/pages/changelog.js'

import React from 'react'
import Router from 'react-router'

import Mui from 'material-ui'

import Keybindings from 'react-side-effect-mousetrap'

let { MenuItem, LeftNav, FlatButton } = Mui
let ThemeManager = new Mui.Styles.ThemeManager()

let { Route, RouteHandler,
      DefaultRoute, NotFoundRoute, Redirect } = Router

let menuItems = [
  {
     type: MenuItem.Types.LINK,
     payload: 'changelog',
     text: 'Changelog'
  }
]

let NotFound = React.createClass({
  render () {
    return (
      <h1>No Route Found</h1>
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
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },
// **

  getInitialState () {
    return {
      location: '',
      isDocked: false
    }
  },

  toMainSearch () {
    let { router } = this.context
    router.transitionTo('mainSearch')
  },

  toSearchUsedCodes () {
    let { router } = this.context
    router.transitionTo('searchUsedCodes')
  },

  toRequestedCodes () {
    let { router } = this.context
    router.transitionTo('requestedCodes')
  },

  feedback () {
    window.open('https://trello.com/b/9DTy6SXm/dispense', '_blank')
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

  render: function () {

    let buttonStyle = {
        height: '50',
        opacity: '0.9'
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
          <div style={{zIndex: 10, position: 'fixed', right: '0', top: '0' }}>
            <FlatButton label='Feedback'
              style={buttonStyle}
              onClick={this.feedback}
              secondary={true} />
            <FlatButton label='Main Search'
              style={buttonStyle}
              onClick={this.toMainSearch}
              secondary={true} />
            <FlatButton label='Search Used Codes'
              style={buttonStyle}
              onClick={this.toSearchUsedCodes}
              secondary={true} />
            <FlatButton label='Requested Codes'
              style={buttonStyle}
              onClick={this.toRequestedCodes}
              secondary={true} />
          </div>
          <div style={{position: 'relative', top: '55px'}}>
            <RouteHandler toggleNav={this.toggleNav}/>
          </div>
          <LeftNav ref='leftNav' docked={this.state.isDocked} menuItems={menuItems}/>
        </div>
      </Keybindings>
    )
  }
})

module.exports = (
          <Route name='app' path='/dispenseApp/' handler={App}>
            <Redirect from='/dispenseApp' to='/dispenseApp/mainSearch'/>
            <Redirect from='/dispenseApp/' to='/dispenseApp/mainSearch'/>
            <Route name='mainSearch' handler={MainSearch}/>
            <Route name='requestCode' path='requestCode/:productId' handler={RequestCode}/>
            <Route name='searchUsedCodes' path='searchUsedCodes' handler={SearchUsedCodes}/>
            <Route name='requestedCodes' path='requestedCodes' handler={RequestedCodes}/>
            <Route name='changelog' path='changelog' handler={Changelog}/>
            <DefaultRoute handler={MainSearch}/>
            <NotFoundRoute handler={NotFound}/>
          </Route>
        )
