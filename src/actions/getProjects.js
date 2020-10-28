import { GET_PROJECTS_START, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE } from './actionTypes';
import { getProjects as getProjectsApi } from '../api/getProjects';
import { push } from 'connected-react-router';

export const getProjects = (organizationId) => async (dispatch) => {
	dispatch({
		type: GET_PROJECTS_START,
	});

	try {
		const projects = await getProjectsApi({ organizationId });

		dispatch({
			type: GET_PROJECTS_SUCCESS,
			payload: projects,
		});
	} catch (err) {
		dispatch({
			type: GET_PROJECTS_FAILURE,
			payload: err,
			error: true,
		});
	}
};
