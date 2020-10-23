import {
	LOOKUP_ORGANIZATION_CODE_START,
	LOOKUP_ORGANIZATION_CODE_SUCCESS,
	LOOKUP_ORGANIZATION_CODE_FAILURE,
} from './actionTypes';
import { getOrganizationByCode } from '../api/getOrganizationByCode';

export const organizationCodeLookup = (code) => async (dispatch) => {
	dispatch({
		type: LOOKUP_ORGANIZATION_CODE_START,
	});

	try {
		const id = await getOrganizationByCode(code);
		dispatch({
			type: LOOKUP_ORGANIZATION_CODE_SUCCESS,
			payload: id,
		});
	} catch (err) {
		dispatch({
			type: LOOKUP_ORGANIZATION_CODE_FAILURE,
			payload: err,
			error: true,
		});
	}
};
