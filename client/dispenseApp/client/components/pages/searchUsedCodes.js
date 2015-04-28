var React = require('react');
var Griddle = require('griddle-react');

var SearchForm = require('../atomic/searchForm.js');

var columnMetadata = [
    {'columnName': 'customerEmail', 'displayName': 'Email' },
    {'columnName': 'customerName', 'displayName': 'Name' },
    {'columnName': 'code', 'displayName': 'Code' },
    {'columnName': 'representative', 'displayName': 'Rep' },
    {'columnName': 'date', 'displayName': 'Date' },
    {'columnName': 'universityOrBusiness', 'displayName': 'Univ' },
    {'columnName': 'chatOrTicket', 'displayName': 'Ticket' },
    {'columnName': 'productId', 'displayName': 'Product' }
]

var SearchUsedCodes = React.createClass({


    getInitialState: function(){
        var initial = { 
        	"results": []
	    };

      	return initial;
    },

    process : function(){

    },

    sendData : function(data){
        // productsAdded = data.map(function(val, ind, arr){

        // });
        this.setState({results:data});
    },

	render: function(){
		return (
            <div>
                <SearchForm
                    sendData={this.sendData} />
                <Griddle 
                	results={this.state.results}
                	columns={['customerEmail', 'code', 'customerName', 'date', 'universityOrBusiness' ]} 
                    columnMetadata={columnMetadata}
                	resultsPerPage={10}
                	showSettings={true}/>
            </div>
		);
	}

});

module.exports = SearchUsedCodes;
