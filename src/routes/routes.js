import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../app';
import Login from '../components/Login';
import Register from '../components/Register';
export default (
	<Switch>
		<Route path="/" component={Login} exact />
		<Route path="/signup" component={Register} />
	</Switch>
);
