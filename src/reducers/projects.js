import * as R from 'ramda';

import { GET_PROJECTS_SUCCESS } from '../actions/actionTypes';

export default (state = [], { type, payload }) => {
	switch (type) {
		case GET_PROJECTS_SUCCESS:
			const currentState = state;
			payload.forEach((project) => {
				currentState.push(project);
			});
			const newState = R.uniq(currentState);
			return newState;
		default:
			return state;
	}
};
