import { CREATE_ORGANIZATION_START, CREATE_ORGANIZATION_SUCCESS, CREATE_ORGANIZATION_FAILURE } from './actionTypes';
import { createOrganization as createOrganizationApi } from '../api/createOrganization';
import { push } from 'connected-react-router';

export const createOrganization = (organizationData) => async (dispatch) => {
	dispatch({
		type: CREATE_ORGANIZATION_START,
	});

	try {
		const newOrganization = await createOrganizationApi({ ...organizationData });

		dispatch({
			type: CREATE_ORGANIZATION_SUCCESS,
			payload: { organization_id: newOrganization.id },
		});
		dispatch(push('/register'));
	} catch (err) {
		dispatch({
			type: CREATE_ORGANIZATION_FAILURE,
			payload: err,
			error: true,
		});
	}
};
