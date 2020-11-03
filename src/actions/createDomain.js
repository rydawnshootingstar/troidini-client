import { CREATE_DOMAIN_START, CREATE_DOMAIN_SUCCESS, CREATE_DOMAIN_FAILURE } from './actionTypes';
import { createDomain as createDomainApi } from '../api/createDomain';
import { push } from 'connected-react-router';

export const createDomain = (domain) => async (dispatch) => {
	dispatch({
		type: CREATE_DOMAIN_START,
	});

	const domainData = { ...domain };

	try {
		const domain = await createDomainApi(domainData);
		dispatch({
			type: CREATE_DOMAIN_SUCCESS,
		});
	} catch (err) {
		dispatch({
			type: CREATE_DOMAIN_FAILURE,
			payload: err,
			error: true,
		});
	}
};
