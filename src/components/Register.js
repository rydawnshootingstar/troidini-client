import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/registerUser';
import styled from 'styled-components';

class Register extends Component {
	state = {
		email: '',
		password: '',
		username: '',
		organization_code: '',
		admin_code: '',
		type: '',
		avatar_url: '',
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
				<h1></h1>
				<h3>Password</h3>
				{this.state.email}
				<Input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
					placeholder="Password"
				></Input>
				{this.props.password}
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

const Input = styled.input`
	width: 400px;
	height: 30px;
	margin-bottom: 35px;
`;

const mapStateToProps = (state) => ({
	email: state.partialUser.email,
	password: state.partialUser.password,
});

const mapDispatchToProps = {
	registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
