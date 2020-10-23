import * as R from 'ramda';

import { LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS } from '../actions/actionTypes';

export default (state = {}, { type, payload }) => {
	switch (type) {
		case LOGIN_USER_SUCCESS:
			return R.mergeRight(state, { ...payload });
		default:
			return state;
	}
};
