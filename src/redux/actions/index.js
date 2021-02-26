import { INCREMENT, DECREMENT, RESET } from '../types/actions';

export function increment(payload) {
	return { type: INCREMENT, payload };
}

export function decrement(payload) {
	return { type: DECREMENT, payload };
}

export function reset() {
	return { type: RESET };
}
