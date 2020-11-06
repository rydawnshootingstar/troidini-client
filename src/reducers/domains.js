import * as R from 'ramda';

import { GET_DOMAINS_SUCCESS } from '../actions/actionTypes';

const defaultState = [];
export default (state = defaultState, { type, payload }) => {
	switch (type) {
		case GET_DOMAINS_SUCCESS:
			const currentState = state;
			payload.forEach((domain) => {
				currentState.push(domain);
			});
			const newState = R.uniq(currentState);
			return newState;
		default:
			return state;
	}
};
