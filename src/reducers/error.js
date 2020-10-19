import * as R from 'ramda';

import { LOGIN_USER_FAILURE } from '../actions/actionTypes';

export default (state = { login: null }, { type, payload }) => {
	switch (type) {
		case LOGIN_USER_FAILURE:
			return R.mergeRight(state, { login: payload });
		default:
			return state;
	}
};
