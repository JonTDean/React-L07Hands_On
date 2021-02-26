import React from 'react';

import { connect } from 'react-redux';
import { decrement } from '../../../redux/actions/index';

function DecrOne({ decrement }) {
	return (
		<>
			<button onClick={() => decrement(1)}>Decrease Count By 1</button>
		</>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		decrement: (decr) => dispatch(decrement(decr)),
	};
};

export default connect(null, mapDispatchToProps)(DecrOne);
