import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from './actionTypes';
import { login } from '../api/login';
import { push } from 'connected-react-router';

export const logInUser = (email, password) => async (dispatch) => {
	dispatch({
		type: LOGIN_USER_START,
	});

	try {
		const user = await login(email, password);
		dispatch({
			type: LOGIN_USER_SUCCESS,
			payload: user,
		});

		dispatch(push('/signup'));
	} catch (err) {
		dispatch({
			type: LOGIN_USER_FAILURE,
			payload: err,
			error: true,
		});
	}
};
