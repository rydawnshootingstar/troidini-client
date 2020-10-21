import * as R from 'ramda';

import { BEGIN_REGISTRATION_SUCCESS } from '../actions/actionTypes';

export default (state = {}, { type, payload }) => {
	switch (type) {
		case BEGIN_REGISTRATION_SUCCESS:
			return R.mergeRight(state, { ...payload });
		default:
			return state;
	}
};
