import * as R from 'ramda';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentProject } from '../actions/setCurrentProject';
import { getInitiatives } from '../actions/getInitiatives';

class Project extends Component {
	state = {
		project: undefined,
	};
	componentDidMount() {
		const projectName = this.props.match.params.name;
		const targetProject = R.find(R.propEq('name', projectName))(this.props.projects);
		this.setState({
			project: targetProject,
		});

		this.props.setCurrentProject(targetProject.id);

		this.props.getInitiatives(targetProject.id);
		// this.props.getDomains(this.props.currentProjectId);
		// this.props.getOnlineNow(this.props.organizationId);
		// TODO: get initiatives and save to state
		// TODO: get domains and save to state
		// TODO: get online ppl and save to state
	}

	renderInitiative = (initiative) => {
		return (
			<div>
				<h1>Initiative: {initiative.name}</h1>
			</div>
		);
	};
	render() {
		return (
			<div>
				<h1>{this.state.project && this.state.project.name}</h1>
				<div>
					{this.props.initiatives
						? this.props.initiatives.map((initiative) => this.renderInitiative(initiative))
						: 'no initiatives'}
				</div>
				<div>{this.props.domains ? this.renderDomains() : 'no domains'}</div>
				<div>{this.props.onlineNow ? this.renderSocialBar() : 'nobody online'}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	projects: state.projects,
	currentProjectId: state.currentProject,
	organizationId: state.user.organization_id,
	initiatives: state.initiatives,
});

const mapDispatchToProps = {
	setCurrentProject,
	getInitiatives,
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
