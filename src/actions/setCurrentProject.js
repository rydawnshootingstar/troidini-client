import { SET_CURRENT_PROJECT } from './actionTypes';

export const setCurrentProject = (id) => async (dispatch) => {
	dispatch({
		type: SET_CURRENT_PROJECT,
		payload: id,
	});
};
