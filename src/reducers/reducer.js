import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user';
import error from './error';
import partialUser from './partialUser';
import projects from './projects';
import currentProject from './currentProject';
import initiatives from './initiatives';
import domains from './domains';
import onlineUsers from './onlineUsers';

const createRootReducer = (history) => {
	return combineReducers({
		router: connectRouter(history),
		partialUser,
		user,
		error,
		projects,
		currentProject,
		initiatives,
		domains,
		onlineUsers,
	});
};

export default createRootReducer;
