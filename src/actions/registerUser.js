import { REGISTER_USER_START, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from './actionTypes';
import { register } from '../api/register';
import { push } from 'connected-react-router';

export const registerUser = (email, password) => async (dispatch) => {
	dispatch({
		type: REGISTER_USER_START,
	});

	try {
		const user = await register(email, password);
		dispatch({
			type: REGISTER_USER_SUCCESS,
			payload: user,
		});
	} catch (err) {
		dispatch({
			type: REGISTER_USER_FAILURE,
			payload: err,
			error: true,
		});
	}
};
