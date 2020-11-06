import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import RouteLink from '../components/UI/RouteLink';
import { getProjects } from '../actions/getProjects';
import { logOutUser } from '../actions/logOutUser';
import * as R from 'ramda';

class Projects extends Component {
	async componentDidMount() {
		await this.props.getProjects();
	}

	renderProject = (project) => (
		<div key={project.id}>
			<ProjectPicture />
			<RouteLink to={`/project/${project.name}`}>
				<h1>{project.name}</h1>
			</RouteLink>
		</div>
	);

	logOut = () => {
		this.props.logOutUser();
	};

	render() {
		return (
			<Container>
				<h1>Projects</h1>
				<button onClick={this.logOut}>Log out</button>
				<ProjectsContainer>
					{this.props.projects.map((project) => {
						return this.renderProject(project);
					})}
					{this.props.user.type !== 'Support' && (
						<RouteLink to={'/project-setup'}>
							<PlusButton>+</PlusButton>
						</RouteLink>
					)}
				</ProjectsContainer>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
	projects: state.projects,
});

const mapDispatchToProps = {
	getProjects,
	logOutUser,
};

const ProjectsContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: flex-start;
	flex-wrap: wrap;
	overflow: wrap;
	text-align: center;

	h1 {
		font-size: 45px;
		margin-top: 10px;
	}
`;

const ProjectPicture = styled.div`
	width: 200px;
	height: 200px;
	border: 2px solid black;
`;

const PlusButton = styled.div`
	width: 200px;
	height: 200px;
	font-size: 150px;
	cursor: pointer;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
