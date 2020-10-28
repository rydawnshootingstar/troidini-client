import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../components/Login';
import OrganizationSetup from '../components/OrganizationSetup';
import PreSignup from '../components/PreSignup';
import Register from '../components/Register';
import Projects from '../components/Projects';

export default (
	<Switch>
		<Route path="/" component={Login} exact />
		<Route path="/setup" component={PreSignup} exact />
		<Route path="/register" component={Register} exact />
		<Route path="/organization-setup" component={OrganizationSetup} exact />
		<Route path="/projects" component={Projects} />
	</Switch>
);
