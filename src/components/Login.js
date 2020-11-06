import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../actions/logInUser';
import { beginRegistration } from '../actions/beginRegistration';
import { resumeSession } from '../actions/resumeSession';
import styled from 'styled-components';
import logoimg from '../../public/WORKING-logo.png';

class Login extends Component {
	state = {
		email: '',
		password: '',
	};

	componentDidMount() {
		this.props.resumeSession();
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<Container>
				<Logo src={logoimg} alt={'Troidini'} />
				<Input
					type="text"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
					placeholder="Email"
				></Input>
				<Input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
					placeholder="Password"
				></Input>
				<ButtonContainer>
					<Button onClick={() => this.props.logInUser(this.state.email, this.state.password)}>Login</Button>
					<Button onClick={() => this.props.beginRegistration(this.state.email, this.state.password)}>
						Register
					</Button>
				</ButtonContainer>

				{/* TODO: render these separately in case a user is messin around and produces both */}
				<ErrorMessage>{this.props.loginError || this.props.registrationError || ''}</ErrorMessage>
			</Container>
		);
	}
}

const colors = {
	orange: '#ff8d24',
	teal: '#1a6283',
	black: '#170916',
	slategray: '##2d5c69',
	dimgray: '#65665e',
	offwhite: '#f8f8ff',
};

const Container = styled.div`
	background-color: ${colors.teal};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
`;

const Input = styled.input`
	width: 400px;
	height: 30px;
	margin-bottom: 35px;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 400px;
`;

const Button = styled.button`
	display: flex;
	background-color: ${colors.orange};
	color: ${colors.offwhite};
	justify-content: center;
	align-items: center;
	width: 160px;
	height: 60px;
	border-radius: 15px;
	font-size: 25px;
	cursor: pointer;
	&:hover {
		background-color: ${colors.teal};
	}
`;

const Logo = styled.img`
	width: 331px;
	height: 230px;
	margin-bottom: 30px;
`;

const ErrorMessage = styled.h2`
	color: red;
`;

const mapStateToProps = ({ error }) => ({
	loginError: error.login,
	registrationError: error.begin_registration,
});

const mapDispatchToProps = {
	logInUser,
	beginRegistration,
	resumeSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
