import React from 'react'
import Griddle from 'griddle-react'

import Mui from 'material-ui'

let { Paper } = Mui

let SearchForm = require('../../components/atoms/searchForm.js')

let columnMetadata = [
  {'columnName': 'customerEmail', 'displayName': 'Email' },
  {'columnName': 'customerName', 'displayName': 'Name' },
  {'columnName': 'code', 'displayName': 'Code' },
  {'columnName': 'representative', 'displayName': 'Rep' },
  {'columnName': 'date', 'displayName': 'Date' },
  {'columnName': 'universityOrBusiness', 'displayName': 'Univ' },
  {'columnName': 'chatOrTicket', 'displayName': 'Ticket' },
  {'columnName': 'productId', 'displayName': 'Product' }
]

let SearchUsedCodes = React.createClass({

  getInitialState () {
    var initial = {
      'results': []
    }

    return initial
  },

  sendData (data) {
    this.setState({results: data})
  },

  keyMap: {
    'esc': (e) => {
      e.preventDefault()
      console.log('esc on Search Used Codes')
    }
  },

  render () {
    return (
      <div>
        <SearchForm
          sendData={this.sendData} />
        <Paper zDepth={2} style={{width: '95%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20'}}>
          <Griddle
            results={this.state.results}
            columns={['customerEmail', 'code', 'customerName', 'date', 'universityOrBusiness' ]}
            columnMetadata={columnMetadata}
            resultsPerPage={10}
            useGriddleStyles={false}
            showSettings={true}/>
        </Paper>
      </div>
    )
  }

})

module.exports = SearchUsedCodes
