import { REGISTER_USER_START, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, LOGIN_USER_START } from './actionTypes';
import { register } from '../api/register';
import { push } from 'connected-react-router';
import { logInUser } from './logInUser';

export const registerUser = (userData) => async (dispatch) => {
	dispatch({
		type: REGISTER_USER_START,
	});

	try {
		if (userData.organizationId) {
		}
		const user = await register({ ...userData });
		dispatch({
			type: REGISTER_USER_SUCCESS,
		});

		dispatch(logInUser(user.email, user.password));
	} catch (err) {
		dispatch({
			type: REGISTER_USER_FAILURE,
			payload: err,
			error: true,
		});
	}
};
