import * as R from 'ramda';

import { GET_ONLINE_USERS_SUCCESS } from '../actions/actionTypes';

const defaultState = [];
export default (state = defaultState, { type, payload }) => {
	switch (type) {
		case GET_ONLINE_USERS_SUCCESS:
			const currentState = [];
			payload.forEach((user) => {
				currentState.push(user);
			});
			const newState = R.uniq(currentState);
			return newState;
		default:
			return state;
	}
};
