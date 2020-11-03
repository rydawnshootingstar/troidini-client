import * as R from 'ramda';

import {
	LOGIN_USER_FAILURE,
	BEGIN_REGISTRATION_FAILURE,
	CREATE_ORGANIZATION_FAILURE,
	REGISTER_USER_FAILURE,
	LOOKUP_ORGANIZATION_CODE_FAILURE,
	GET_PROJECTS_FAILURE,
	RESUME_SESSION_FAILURE,
	CREATE_PROJECT_FAILURE,
	CREATE_DOMAIN_FAILURE,
} from '../actions/actionTypes';

export default (
	state = {
		login: null,
		begin_registration: null,
		create_organization: null,
		register_user: null,
		lookup_organization: null,
		resume_session: null,
		get_projects: null,
		create_project: null,
		create_domain: null,
	},
	{ type, payload }
) => {
	switch (type) {
		case LOGIN_USER_FAILURE:
			return R.mergeRight(state, { login: payload });
		case BEGIN_REGISTRATION_FAILURE:
			return R.mergeRight(state, { begin_registration: payload });
		case CREATE_ORGANIZATION_FAILURE:
			return R.mergeRight(state, { create_organization: payload });
		case REGISTER_USER_FAILURE:
			return R.mergeRight(state, { register_user: payload });
		case LOOKUP_ORGANIZATION_CODE_FAILURE:
			return R.mergeRight(state, { lookup_organization: payload });
		case RESUME_SESSION_FAILURE:
			return R.mergeRight(state, { resume_session: payload });
		case GET_PROJECTS_FAILURE:
			return R.mergeRight(state, { get_projects: payload });
		case CREATE_PROJECT_FAILURE:
			return R.mergeRight(state, { create_project: payload });
		case CREATE_DOMAIN_FAILURE:
			return R.mergeRight(state, { create_domain: payload });
		default:
			return state;
	}
};
