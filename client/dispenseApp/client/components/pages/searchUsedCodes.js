var React = require('react');
var Griddle = require('griddle-react');

var SearchForm = require('../atomic/searchForm.js');

var fakeData = require('../../sampleUsedCodes.js');

var testFilter = {
    filter: {
        where: {
            code: '553ac70629e5058678deeeaf'
        }
    }
}

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
        this.setState({results:data});
    },

	render: function(){
		return (
            <div>
                <SearchForm
                    sendData={this.sendData} />
                <Griddle 
                	results={this.state.results}
                	columns={['customerEmail', 'code', 'chatOrTicket', 'customerName', 'representative', 'date', 'universityOrBusiness']} 
                	resultsPerPage={15}
                	showSettings={true}/>
            </div>
		);
	}

});

module.exports = SearchUsedCodes;
