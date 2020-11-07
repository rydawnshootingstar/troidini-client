import { GET_ONLINE_USERS_START, GET_ONLINE_USERS_SUCCESS, GET_ONLINE_USERS_FAILURE } from './actionTypes';
import { getOnlineUsers } from '../api/getOnlineUsers';

export const getOnlineNow = () => async (dispatch) => {
	dispatch({
		type: GET_ONLINE_USERS_START,
	});

	try {
		const users = await getOnlineUsers();

		dispatch({
			type: GET_ONLINE_USERS_SUCCESS,
			payload: users,
		});
	} catch (err) {
		dispatch({
			type: GET_ONLINE_USERS_FAILURE,
			payload: err,
			error: true,
		});
	}
};
