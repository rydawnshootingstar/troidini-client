import * as R from 'ramda';

import { GET_PROJECTS_SUCCESS, LOGOUT_USER_SUCCESS } from '../actions/actionTypes';

const defaultState = [];
export default (state = defaultState, { type, payload }) => {
	switch (type) {
		case GET_PROJECTS_SUCCESS:
			const currentState = state;
			payload.forEach((project) => {
				currentState.push(project);
			});
			const newState = R.uniq(currentState);
			return newState;
		case LOGOUT_USER_SUCCESS:
			return defaultState;
		default:
			return state;
	}
};
