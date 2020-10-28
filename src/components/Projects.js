import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import { getProjects } from '../actions/getProjects';

class Projects extends Component {
	componentDidMount() {
		this.props.getProjects();
	}
	render() {
		return <div>Projects</div>;
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
});

const mapDispatchToProps = {
	getProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
