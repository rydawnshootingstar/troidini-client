import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/registerUser';
import { organizationCodeLookup } from '../actions/organizationCodeLookup';
import styled from 'styled-components';

import ContentBox from './UI/ContentBox';
import FormField from './UI/FormField';
import OptionForm from './UI/OptionForm';

class Register extends Component {
	state = {
		email: '',
		password: '',
		username: '',
		organization_code: '',
		type: '',
		avatar_url: '',
		organization_id: undefined,
		formIncomplete: true,
		formError: '',
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

	handleInviteLookup = async () => {
		await this.props.organizationCodeLookup(this.state.organization_code);
		this.setState({
			organization_id: this.props.lookedUpId,
		});
	};

	renderVerifyStatus = () => (
		<VerifyStatus>
			{this.state.organization_id ? (
				<p>✅</p>
			) : (
				<Button small onClick={this.handleInviteLookup}>
					Verify Code
				</Button>
			)}
		</VerifyStatus>
	);

	renderOptions = () => {
		return (
			<OptionForm
				title={'User Type'}
				stateVariable={'type'}
				stateValue={this.state.type}
				handleChange={this.handleChange}
				options={[
					{
						name: 'Developer',
						description:
							'Developers resolve issues and track their status, keeping bugs associated with the correct repos',
						value: 'Developer',
					},
					{
						name: 'Support',
						description:
							'Support users help the dev team by adding information to issues and communicating intended behavior',
						value: 'Support',
					},
				]}
			/>
		);
	};

	fieldsFilledOut = () => {
		const { email, password, username, organization_id, type } = this.state;
		const filledOut = email && password && username && organization_id && type;
		if (filledOut) {
			this.setState({
				formIncomplete: false,
			});
		}

		return filledOut;
	};

	handleContinue = async () => {
		this.setState({
			formError: '',
		});
		const {
			email,
			password,
			username,
			organization_code,
			type,
			avatar_url,
			organization_id,
			formIncomplete,
		} = this.state;
		if (organization_code) {
			await this.handleInviteLookup();
		}

		if (this.fieldsFilledOut()) {
			this.props.registerUser({
				email,
				username,
				password,
				type,
				avatar_url,
				organization_id: this.state.organization_id,
			});
		} else {
			this.setState({
				formError: 'All required fields must be filled out to continue',
			});
		}
	};

	render() {
		return (
			<Container>
				<PageTitle>User Setup</PageTitle>
				<PageSubtitle>
					{this.props.organizationId
						? 'Your organization is now ready to go! Complete your user information to start using Troidini'
						: "To join an existing organization, you'll need an invite code. Ask an Administrator for this code and paste it below."}
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
							<React.Fragment>
								<FormField label={'Organization Code'}>
									<Input
										type="text"
										name="organization_code"
										value={
											this.state.organization_id ? 'Code Verified!' : this.state.organization_code
										}
										disabled={this.state.organization_id}
										onChange={this.handleChange}
										placeholder="Enter your organization's invite code"
									></Input>
									{this.renderVerifyStatus()}
								</FormField>
								{this.renderOptions()}
							</React.Fragment>
						)}
					</FormField>
				</ContentBox>

				<ContentBox title={'Optional'} subtitle={'You can set these up later'}>
					<h2>User Customization</h2>
					Avatar {/* TODO: add avatar option */}
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
	width:${(props) => (props.small ? '90px' : '160px')}; 
	height: ${(props) => (props.small ? '40px' : '60px')}; ;
	border-radius: 15px;
	font-size: ${(props) => (props.small ? '15px' : '25px')}; ;
	cursor: pointer;
	&:hover {
		/* background-color: ${colors.teal}; */
	}
`;

const ErrorMessage = styled.h2`
	color: red;
`;

const VerifyStatus = styled.span`
	margin-left: 20px;
`;

const mapStateToProps = (state) => ({
	email: state.partialUser.email,
	password: state.partialUser.password,
	organizationId: state.partialUser.organization_id,
	registrationError: state.error.register_user,
	lookupError: state.error.lookup_organization,
	lookedUpId: state.partialUser.lookedUpId,
});

const mapDispatchToProps = {
	registerUser,
	organizationCodeLookup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
