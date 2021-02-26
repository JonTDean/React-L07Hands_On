import { INCREMENT, DECREMENT, RESET } from '../types/actions';

const initialState = {
	count: 0,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT:
			// console.log('HIT INCREMENT');
			return Object.assign({}, state, {
				count: state.count + action.payload,
			});
		case DECREMENT:
			// console.log('HIT DECREMENT');
			return Object.assign({}, state, {
				count: state.count - action.payload,
			});
		case RESET:
			// console.log('HIT RESET');
			return Object.assign({}, state, {
				count: 0,
			});
		default:
			return state;
	}
}
