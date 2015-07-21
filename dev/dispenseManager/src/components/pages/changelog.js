import React from 'react'
import changelog from '!html!markdown!../../../../../CHANGELOG.md'

let Changelog = React.createClass({
  render () {
    return (
      <div dangerouslySetInnerHTML={{__html: changelog}}>
      </div>
    )
  }
})

module.exports = Changelog
