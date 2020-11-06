import * as R from 'ramda';

import { SET_CURRENT_PROJECT } from '../actions/actionTypes';

const defaultState = '';

export default (state = defaultState, { type, payload }) => {
	switch (type) {
		case SET_CURRENT_PROJECT:
			return payload;
		default:
			return state;
	}
};
