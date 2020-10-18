import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createRootReducer from './reducers/reducer';
import routes from './routes/routes';

const history = createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];

const store = createStore(createRootReducer(history), composeWithDevTools(applyMiddleware(...middleware)));

/*
    APP ENTRY POINT:
    -configure the redux store with redux devtool extension compatibility and thunk middleware
    -define DOM element to render to ('root')
    -render the App component
*/

const root = document.getElementById('root');

const application = (
	<Provider store={store}>
		<ConnectedRouter history={history}>{routes}</ConnectedRouter>
	</Provider>
);
// Register service worker
// if ('serviceWorker' in navigator) {
// 	window.addEventListener('load', () => {
// 		navigator.serviceWorker.register('/sw.js').then(registration => {
// 			console.log('SW registered:', registration);
// 		}).catch(error => {
// 			console.log('SW registration failed:', error);
// 		});
// 	});
// }
ReactDOM.render(application, root);
