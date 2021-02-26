import React from 'react';

import { connect } from 'react-redux';
import { increment } from '../../../redux/actions/index';

function IncFive({ increment }) {
	return (
		<>
			<button onClick={() => increment(5)}>Increase Count By 5</button>
		</>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		increment: (inc) => dispatch(increment(inc)),
	};
};

export default connect(null, mapDispatchToProps)(IncFive);
