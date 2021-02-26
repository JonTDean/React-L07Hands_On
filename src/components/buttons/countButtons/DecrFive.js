import React from 'react';

import { connect } from 'react-redux';
import { decrement } from '../../../redux/actions/index';

function DecrFive({ decrement }) {
	return (
		<>
			<button onClick={() => decrement(5)}>Decrease Count By 5</button>
		</>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		decrement: (decr) => dispatch(decrement(decr)),
	};
};

export default connect(null, mapDispatchToProps)(DecrFive);
