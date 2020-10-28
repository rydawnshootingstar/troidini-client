import * as R from 'ramda';

import { GET_PROJECTS_SUCCESS } from '../actions/actionTypes';

export default (state = {}, { type, payload }) => {
	switch (type) {
		case GET_PROJECTS_SUCCESS:
			return R.mergeRight(state, { ...payload });
		default:
			return state;
	}
};
