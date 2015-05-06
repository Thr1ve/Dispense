var React = require('react');
import app from 'ampersand-app'

var requestedCodes = React.createClass({

	getInitialState: function() {
		return {
			data: []
		};
	},

	componentDidMount: function() {
        this.setState({data:app.newCode.models});
    },

	render: function() {
		var codes = this.state.data.map(function(val){
			return (
				<div key={val.id}>
					<p> Code                  : {val.code} </p>
					<p> Customer Name         : {val.customerName} </p>
					<p> Customer Email        : {val.customerEmail} </p>
					<p> University Or Business: {val.universityOrBusiness} </p>
					<p> Representative        : {val.representative} </p>
					<p> Chat Or Ticket        : {val.chatOrTicket} </p>
					<p> Date                  : {val.date} </p>
					<br></br>
                    <br></br>
				</div>
			);

		});

		return (
			<div>
				{codes}
			</div>
		);
	}


});

module.exports = requestedCodes;