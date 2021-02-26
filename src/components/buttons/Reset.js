import React from 'react';

import { connect } from 'react-redux';
import { reset } from '../../redux/actions/index';

function Reset({ reset }) {
	return (
		<>
			<button onClick={reset}> Reset </button>
		</>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		reset: () => dispatch(reset()),
	};
};

export default connect(null, mapDispatchToProps)(Reset);
