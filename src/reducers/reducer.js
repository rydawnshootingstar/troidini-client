import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './user';
import error from './error';

const createRootReducer = (history) => {
	return combineReducers({
		router: connectRouter(history),
		user,
		error,
	});
};

export default createRootReducer;
