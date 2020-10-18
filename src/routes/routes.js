import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../app';
export default (
	<Switch>
		<Route path="/" component={App} exact />
	</Switch>
);
