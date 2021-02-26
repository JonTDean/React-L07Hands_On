import React from 'react';
import { connect } from 'react-redux';

import '../css/App.css';
import { IncOne, IncFive, DecrOne, DecrFive, Reset } from './buttons/_buttons';

function App(props) {

	return (
		<div className="App">
			<h1>Counter</h1>

			<p>Count is: {props.count}</p>

			<div id="buttons">
				<IncOne />
				<br />
				<br />

				<IncFive />
				<br />
				<br />

				<DecrOne />
				<br />
				<br />

				<DecrFive />
				<br />
				<br />

				<Reset />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { count: state.count };
};

export default connect(mapStateToProps)(App);
