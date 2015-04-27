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
        return {
            results:[] 
        }
    },

    process : function(){

    },

    sendData : function(data){
        console.log('sendData went off');
        console.log(data);
        this.setState({results:data.models});
        console.log(this.state.results);
    },

	render: function(){
        // window.app.usedCodes.fetch({data:testFilter})
        // console.log(window.app.usedCodes);

        var models = this.state.results;

		return (
            <div>
                <SearchForm
                    sendData={this.sendData} />
                <Griddle results={models}/>
            </div>
		);
	}

});

module.exports = SearchUsedCodes;