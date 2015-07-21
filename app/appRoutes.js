import MainSearch from "./components/pages/mainSearch.js"
import RequestCode from "./components/pages/requestCode.js"
import RequestedCodes from "./components/pages/requestedCodes.js"
import SearchUsedCodes from "./components/pages/searchUsedCodes.js"

import React from "react"
import Router from "react-router"

import Mui from "material-ui"

import Keybindings from "react-side-effect-mousetrap"

let { LeftNav, FlatButton } = Mui
let ThemeManager = new Mui.Styles.ThemeManager()

let { Route, RouteHandler,
      DefaultRoute, NotFoundRoute, Redirect } = Router

let menuItems = []


let NotFound = React.createClass({
  render: function() {
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

//**
// Needed for Material-ui
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },
//**

  getInitialState() {
    return {
      location: "",
      isDocked: false
    }
  },

  toMainSearch: function() {
      let { router } = this.context
      router.transitionTo("mainSearch")
  },

  toSearchUsedCodes: function() {
      let { router } = this.context
      router.transitionTo("searchUsedCodes")
  },

  toRequestedCodes: function() {
      let { router } = this.context
      router.transitionTo("requestedCodes")
  },

  keyMap() {
    return {
      "esc": () => {this.toggleNav()}
    }
  },

  toggleNav() {
    this.refs.leftNav.toggle()
    this.setState({
      isDocked: !this.state.isDocked
    })

    //fix material-ui
    //https://github.com/callemall/material-ui/issues/897
    document.body.style.overflow = "auto"
  },

  render: function () {

    let buttonStyle = {
        height: "50",
        opacity: "0.9"
    }

    return (
      <Keybindings keyMap={{
          "esc": (e) => {
            e.preventDefault()
            this.toggleNav()
          },
          "tab": (e) => {e.preventDefault()},
          "shift+tab": (e) => {e.preventDefault()}
      }}>
        <div>
          <div style={{zIndex: 10, position: "fixed", right: "0", top: "0" }}>
            <FlatButton label="Main Search"
              style={buttonStyle}
              onClick={this.toMainSearch}
              secondary={true} />
            <FlatButton label="Search Used Codes"
              style={buttonStyle}
              onClick={this.toSearchUsedCodes}
              secondary={true} />
            <FlatButton label="Requested Codes"
              style={buttonStyle}
              onClick={this.toRequestedCodes}
              secondary={true} />
          </div>
          <div style={{position: "relative", top: "55px"}}>
            <RouteHandler toggleNav={this.toggleNav}/>
          </div>
          <LeftNav ref="leftNav" docked={this.state.isDocked} menuItems={menuItems}/>
        </div>
      </Keybindings>
    )
  }
})

module.exports = (
          <Route name="app" path="/" handler={App}>
            <Route name="mainSearch" handler={MainSearch}/>
            <Route name="requestCode" path="requestCode/:productId" handler={RequestCode}/>
            <Route name="searchUsedCodes" path="searchUsedCodes" handler={SearchUsedCodes}/>
            <Route name="requestedCodes" path="requestedCodes" handler={RequestedCodes}/>
            <DefaultRoute handler={MainSearch}/>
            <NotFoundRoute handler={NotFound}/>
          </Route>
        )
