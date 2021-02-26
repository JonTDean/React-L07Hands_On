import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../../../redux/actions/index';

function IncOne({ increment }) {
	return (
		<>
			<button onClick={() => increment(1)}>Increase Count By 1</button>
		</>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		increment: (inc) => dispatch(increment(inc)),
	};
};

export default connect(null, mapDispatchToProps)(IncOne);
