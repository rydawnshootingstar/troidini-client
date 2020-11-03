import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RouteLink = styled(Link)`
	text-decoration: none;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

export default (props) => <RouteLink {...props} />;
