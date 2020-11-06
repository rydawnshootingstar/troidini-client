import { GET_INITIATIVES_START, GET_INITIATIVES_SUCCESS, GET_INITIATIVES_FAILURE } from './actionTypes';
import { getInitiatives as getInitiativesApi } from '../api/getInitiatives';

export const getInitiatives = (id) => async (dispatch) => {
	dispatch({
		type: GET_INITIATIVES_START,
	});

	try {
		const initiatives = await getInitiativesApi(id);

		dispatch({
			type: GET_INITIATIVES_SUCCESS,
			payload: initiatives,
		});
	} catch (err) {
		dispatch({
			type: GET_INITIATIVES_FAILURE,
			payload: err,
			error: true,
		});
	}
};
