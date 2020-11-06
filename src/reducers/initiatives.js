import * as R from 'ramda';

import { GET_INITIATIVES_SUCCESS } from '../actions/actionTypes';

const defaultState = [];
export default (state = defaultState, { type, payload }) => {
	switch (type) {
		case GET_INITIATIVES_SUCCESS:
			const currentState = state;
			payload.forEach((initiative) => {
				console.log(initiative);
				currentState.push(initiative);
			});
			const newState = R.uniq(currentState);
			return newState;
		default:
			return state;
	}
};
