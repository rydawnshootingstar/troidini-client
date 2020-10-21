import * as R from 'ramda';

import { LOGIN_USER_FAILURE, BEGIN_REGISTRATION_FAILURE } from '../actions/actionTypes';

export default (state = { login: null, begin_registration: null }, { type, payload }) => {
	switch (type) {
		case LOGIN_USER_FAILURE:
			return R.mergeRight(state, { login: payload });
		case BEGIN_REGISTRATION_FAILURE:
			return R.mergeRight(state, { begin_registration: payload });
		default:
			return state;
	}
};
