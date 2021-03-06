import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../components/Login';
import OrganizationSetup from '../components/OrganizationSetup';
import PreSignup from '../components/PreSignup';
import Register from '../components/Register';
import Projects from '../components/Projects';
import ProjectSetup from '../components/ProjectSetup';
import PrivateRoute from './PrivateRoute';
import Project from '../components/Project';
import PublicRoute from './PublicRoute';

export default (
	<Switch>
		<Route path="/" component={Login} exact />
		<Route path="/setup" component={PreSignup} exact />
		<Route path="/register" component={Register} exact />
		<Route path="/organization-setup" component={OrganizationSetup} exact />
		<PrivateRoute path="/project-setup" component={ProjectSetup} exact />
		<PrivateRoute path="/projects" component={Projects} />
		<PrivateRoute path="/project/:name" component={Project} />
	</Switch>
);
