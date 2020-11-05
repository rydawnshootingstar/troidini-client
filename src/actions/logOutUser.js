import { LOGOUT_USER_START, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE } from './actionTypes';
import { logout } from '../api/logout';
import { push } from 'connected-react-router';

export const logOutUser = () => async (dispatch) => {
	dispatch({
		type: LOGOUT_USER_START,
	});

	try {
		const user = await logout();
		dispatch({
			type: LOGOUT_USER_SUCCESS,
		});

		dispatch(push('/'));
	} catch (err) {
		dispatch({
			type: LOGOUT_USER_FAILURE,
			payload: err,
			error: true,
		});
	}
};
