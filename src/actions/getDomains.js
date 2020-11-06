import { GET_DOMAINS_START, GET_DOMAINS_SUCCESS, GET_DOMAINS_FAILURE } from './actionTypes';
import { getDomains as getDomainsApi } from '../api/getDomains';

export const getDomains = (id) => async (dispatch) => {
	dispatch({
		type: GET_DOMAINS_START,
	});

	try {
		const domains = await getDomainsApi(id);

		dispatch({
			type: GET_DOMAINS_SUCCESS,
			payload: domains,
		});
	} catch (err) {
		dispatch({
			type: GET_DOMAINS_FAILURE,
			payload: err,
			error: true,
		});
	}
};
