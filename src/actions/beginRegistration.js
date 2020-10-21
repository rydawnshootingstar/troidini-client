import { BEGIN_REGISTRATION_START, BEGIN_REGISTRATION_SUCCESS, BEGIN_REGISTRATION_FAILURE } from './actionTypes';
import { checkEmail } from '../api/checkEmail';
import { push } from 'connected-react-router';

export const beginRegistration = (email, password) => async (dispatch) => {
	dispatch({
		type: BEGIN_REGISTRATION_START,
	});

	try {
		const emailNotTaken = await checkEmail(email);
		dispatch({
			type: BEGIN_REGISTRATION_SUCCESS,
			payload: { email, password },
		});

		dispatch(push('/setup'));
	} catch (err) {
		dispatch({
			type: BEGIN_REGISTRATION_FAILURE,
			payload: err,
			error: true,
		});
	}
};
