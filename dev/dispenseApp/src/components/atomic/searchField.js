/*global document module */
import React from "react"
import Mui from "material-ui"

let { TextField } = Mui

let SearchField = React.createClass({

    handleChange() {
        this.props.onUserInput(
            this.refs.filterTextInput.getValue()
        )
    },

    handleBlur() {
      // not working in firefox
      this.refs.filterTextInput.focus()
    },

    componentDidMount() {
        //add mousetrap as class to the input so we can use keybinds in the input field
        let input = document.getElementsByTagName("input")
        input[0].className = "mousetrap searchField"

        this.refs.filterTextInput.focus()
    },

    render() {
        return (
            <TextField
                className="mousetrap"
                style={{height: "50px", top: "0"}}
                type="text"
                placeholder="Search..."
                value={this.props.filterText}
                ref="filterTextInput"
                onChange={this.handleChange}
                onBlur={this.handleBlur}/>
        )
    }

})

module.exports = SearchField
