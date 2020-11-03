import { CREATE_PROJECT_START, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILURE } from './actionTypes';
import { createProject as createProjectApi } from '../api/createProject';
import { createDomain } from './createDomain';
import { push } from 'connected-react-router';

export const createProject = ({ name, domains }) => async (dispatch) => {
	dispatch({
		type: CREATE_PROJECT_START,
	});

	try {
		const project = await createProjectApi(name);
		dispatch({
			type: CREATE_PROJECT_SUCCESS,
		});

		if (domains) {
			console.log('we processin domains');
			domains.forEach((domain) => {
				domain.project_id = project.id;
				dispatch(createDomain(domain));
			});
		}

		dispatch(push('/projects'));
	} catch (err) {
		dispatch({
			type: CREATE_PROJECT_FAILURE,
			payload: err,
			error: true,
		});
	}
};
