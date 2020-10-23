import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/registerUser';
import styled from 'styled-components';

import ContentBox from './UI/ContentBox';
import FormField from './UI/FormField';

class Register extends Component {
	state = {
		email: '',
		password: '',
		username: '',
		organization_code: '',
		admin_code: '',
		type: '',
		avatar_url: '',
		organization_id: undefined,
		formIncomplete: true,
	};

	componentDidMount() {
		this.setState({
			email: this.props.email,
			password: this.props.password,
			organization_id: this.props.organizationId ? this.props.organizationId : undefined,
			type: this.props.organizationId ? 'Admin' : '',
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleContinue = () => {
		const {
			email,
			password,
			username,
			organization_code,
			admin_code,
			type,
			avatar_url,
			organization_id,
			formIncomplete,
		} = this.state;
		if (organization_code) {
		}

		if ((email, username, password, type, organization_id, !formIncomplete)) {
			this.props.registerUser({
				email,
				username,
				password,
				admin_code,
				type,
				avatar_url,
				organization_id,
			});
		} else {
			this.setState({});
		}
	};

	render() {
		return (
			<Container>
				<PageTitle>User Setup</PageTitle>
				<PageSubtitle>
					{this.props.organizationId
						? 'Your organization is now ready to go! Complete your user information to start using Troidini'
						: "To join an existing organization, you'll need an invite code. Ask an Administrator for this code and paste it below. To create an additional Administrator account, you'll also need the Admin Code."}
				</PageSubtitle>
				<ContentBox title={'Required'}>
					<FormField label={'Username'}>
						<Input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
							placeholder="This name will be visible to other users in your Organization"
						></Input>

						{/* if there's no organizationId coming from redux, the user is not the creator of the organization */}
						{!this.props.organizationId && (
							<div>
								<FormField label={'Organization Code'}>
									<Input
										type="text"
										name="organization_code"
										value={this.state.organization_code}
										onChange={this.handleChange}
										placeholder="Enter your organization's code"
									></Input>
								</FormField>
								<OptionPicker>
									<OptionIcon />
									<OptionIcon />
									<OptionIcon />
								</OptionPicker>
							</div>
						)}
					</FormField>
				</ContentBox>

				<ContentBox title={'Optional'} subtitle={'You can set these up later'}>
					<h2>User Customization</h2>
					Avatar {/* TODO: add avatar option */}
				</ContentBox>
				<Button onClick={this.handleContinue}>Continue</Button>

				<ErrorMessage>{this.props.registrationError || ''}</ErrorMessage>
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

const Button = styled.button`
	display: flex;
	background-color: ${(props) => (props.secondary ? props.secondary : '#FFF')};
	color: ${(props) => (props.tertiary ? props.tertiary : '#000')};
	justify-content: center;
	align-items: center;
	width: 160px;
	height: 60px;
	border-radius: 15px;
	font-size: 25px;
	cursor: pointer;
	&:hover {
		/* background-color: ${colors.teal}; */
	}
`;

const ErrorMessage = styled.h2`
	color: red;
`;
const OptionPicker = styled.div`
	display: flex;
`;

const OptionIcon = styled.div`
	width: 350px;
	height: 350px;
	color: 'red';
`;

const mapStateToProps = (state) => ({
	email: state.partialUser.email,
	password: state.partialUser.password,
	organizationId: state.partialUser.organization_id,
	registrationError: state.error.register_user,
});

const mapDispatchToProps = {
	registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
