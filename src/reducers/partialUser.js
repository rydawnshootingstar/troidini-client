import * as R from 'ramda';

import {
	BEGIN_REGISTRATION_SUCCESS,
	CREATE_ORGANIZATION_SUCCESS,
	LOOKUP_ORGANIZATION_CODE_SUCCESS,
	LOGOUT_USER_SUCCESS,
} from '../actions/actionTypes';

const defaultState = {};

export default (state = defaultState, { type, payload }) => {
	switch (type) {
		case BEGIN_REGISTRATION_SUCCESS:
			return R.mergeRight(state, { ...payload });
		case CREATE_ORGANIZATION_SUCCESS:
			return R.mergeRight(state, { ...payload });
		case LOOKUP_ORGANIZATION_CODE_SUCCESS:
			return R.mergeRight(state, { lookedUpId: payload });
		case LOGOUT_USER_SUCCESS:
			return defaultState;
		default:
			return state;
	}
};
