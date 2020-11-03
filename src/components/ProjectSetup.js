import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ContentBox from './UI/ContentBox';
import FormField from './UI/FormField';
import Button from './UI/Button';

import * as R from 'ramda';
import { createProject } from '../actions/createProject';

class ProjectSetup extends Component {
	state = {
		name: '',
		formError: '',
		domains: [''],
		repos: [''],
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleDomainChange = (index) => (event) => {
		const { domains } = this.state;
		const newDomains = domains.slice(0);
		newDomains[index] = event.target.value;
		this.setState({ domains: newDomains });
	};

	handleRepoChange = (index) => (event) => {
		const { repos } = this.state;
		const newRepos = repos.slice(0);
		newRepos[index] = event.target.value;
		this.setState({ repos: newRepos });
	};

	renderNewDomain = () => {
		let { domains } = this.state;
		const newDomain = '';
		domains.push(newDomain);
		this.setState({ domains });
		console.log(this.state);
	};

	handleContinue = async () => {
		this.setState({
			formError: '',
		});
		const { name, domains, repos } = this.state;
		let domainData = [];

		if (domains) {
			domainData = domains.map((domain, index) => {
				let repository_url = null;
				if (repos[index]) {
					repository_url = repos[index];
				}
				return !domain ? null : { name: domain, repository_url };
			});
		}

		if (name) {
			this.props.createProject({ name, domains: domainData });
		} else {
			this.setState({
				formError: 'All required fields must be filled out to continue',
			});
		}
	};

	render() {
		return (
			<Container>
				<PageTitle>Project Setup</PageTitle>
				<PageSubtitle>
					Projects are distinct applications within your organization. Projects hold all of the domains within
					an application. Choose a name for your new Project and start adding domains according to your
					architecture.
				</PageSubtitle>

				<ContentBox title={'Required'}>
					<FormField label={'Project Name'}>
						<Input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
							placeholder="Enter a name for your Project"
						></Input>
					</FormField>
				</ContentBox>

				<ContentBox title={'Optional'} subtitle={'You can set these up later'}>
					<h2>Domains</h2>
					{this.state.domains.map((domain, index) => (
						<React.Fragment key={index}>
							<FormField label={'Domain Name'}>
								<Input
									type="text"
									value={this.state.domains[index]}
									onChange={this.handleDomainChange(index)}
									placeholder="Front End"
								></Input>
							</FormField>
							<FormField label={'Domain Repository'}>
								<Input
									type="text"
									value={this.state.repos[index]}
									onChange={this.handleRepoChange(index)}
									placeholder="https://github.com/rydawnshootingstar/troidini-client)"
								></Input>
							</FormField>
						</React.Fragment>
					))}
					<Button small onClick={this.renderNewDomain}>
						Add Another Domain
					</Button>
				</ContentBox>
				<Button onClick={this.handleContinue}>Continue</Button>

				<ErrorMessage>
					{this.state.formError || this.props.registrationError || this.props.lookupError || ''}
				</ErrorMessage>
			</Container>
		);
	}
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	max-width: 100%;
	background-color: ${(props) => (props.primary ? props.primary : '#FFF')};
`;

const Input = styled.input`
	width: ${(props) => (props.short ? '100px' : '400px')};
	height: 30px;
`;

const PageTitle = styled.h1`
	font-size: 50px;
`;

const PageSubtitle = styled.p`
	font-size: 15px;
	width: 600px;
	opacity: 60%;
	margin-bottom: 20px;
`;
const ErrorMessage = styled.h2`
	color: red;
`;
const mapStateToProps = (state) => ({
	user: state.user,
});

const mapDispatchToProps = {
	createProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSetup);
