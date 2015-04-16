var React = require('react');

var requestedCodes = React.createClass({

	getInitialState: function() {
		return {
			data: []
		};
	},
	componentDidMount: function() {
        this.setState({data:window.app.newCode.models});
        console.log(this.state.data);
    },

	render: function() {
		console.log(this.state.data);
		var codes = this.state.data.map(function(val, ind, arr){
			return (
				<div key={val.id}>
					<p> {val.code} </p>
					<p> {val.customerName} </p>
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