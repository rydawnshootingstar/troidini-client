import { RESUME_SESSION_START, RESUME_SESSION_SUCCESS, RESUME_SESSION_FAILURE } from './actionTypes';
import { resume } from '../api/resume';
import { push } from 'connected-react-router';

export const resumeSession = () => async (dispatch) => {
	dispatch({
		type: RESUME_SESSION_START,
	});

	try {
		const user = await resume();
		dispatch({
			type: RESUME_SESSION_SUCCESS,
			payload: user,
		});

		dispatch(push('/projects'));
	} catch (err) {
		dispatch({
			type: RESUME_SESSION_FAILURE,
			payload: err,
			error: true,
		});
	}
};
