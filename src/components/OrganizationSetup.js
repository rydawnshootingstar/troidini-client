import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/registerUser';
import styled from 'styled-components';

import ContentBox from './UI/ContentBox';
import FormField from './UI/FormField';

class OrganizationSetup extends Component {
	state = {
		name: '',
		logo_url: '',
		theme_primary: '',
		theme_secondary: '',
		theme_tertiary: '',
	};

	componentDidMount() {
		this.setState({
			email: this.props.email,
			password: this.props.password,
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<Container>
				<PageTitle>Organization Setup</PageTitle>
				<PageSubtitle>
					Troidini keeps your all of your projects organized in a dashboard so you can keep issues separate
					and grant access to users in your Organization on a per-application basis. Set up your Organization
					and customize it based on your company brand to provide your users with a personalized experience
					that will make them feel right at home.
				</PageSubtitle>
				<ContentBox title={'Required'}>
					<FormField label={'Name'}>
						<Input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
							placeholder="Organization Name"
						></Input>
					</FormField>
				</ContentBox>

				<ContentBox title={'Optional'} subtitle={'You can set these up later'}>
					{/* TODO: image uploads (set up bucket for this) */}
					{/* TODO: colorpicker for primary secondary tertiary */}
				</ContentBox>
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
	width: 100%;
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

const Input = styled.input`
	width: 400px;
	height: 30px;
`;

const mapStateToProps = (state) => ({
	email: state.partialUser.email,
	password: state.partialUser.password,
});

const mapDispatchToProps = {
	registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationSetup);
