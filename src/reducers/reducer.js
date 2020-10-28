import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user';
import error from './error';
import partialUser from './partialUser';
import projects from './projects';

const createRootReducer = (history) => {
	return combineReducers({
		router: connectRouter(history),
		partialUser,
		user,
		error,
		projects,
	});
};

export default createRootReducer;
