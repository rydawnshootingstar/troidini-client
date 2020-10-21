import { CREATE_ORGANIZATION_START, CREATE_ORGANIZATION_SUCCESS, CREATE_ORGANIZATION_FAILURE } from './actionTypes';
import { createOrganization } from '../api/createOrganization';
import { push } from 'connected-react-router';

export const createOrganization = (organizationData) => async (dispatch) => {
	dispatch({
		type: CREATE_ORGANIZATION_START,
	});

	try {
		const newOrganization = await createOrganization({ ...organizationData });

		dispatch({
			type: CREATE_ORGANIZATION_SUCCESS,
			payload: newOrganization,
		});
	} catch (err) {
		dispatch({
			type: CREATE_ORGANIZATION_FAILURE,
			payload: err,
			error: true,
		});
	}
};
