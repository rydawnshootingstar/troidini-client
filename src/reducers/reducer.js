import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user';
import error from './error';
import partialUser from './partialUser';

const createRootReducer = (history) => {
	return combineReducers({
		router: connectRouter(history),
		partialUser,
		user,
		error,
	});
};

export default createRootReducer;
