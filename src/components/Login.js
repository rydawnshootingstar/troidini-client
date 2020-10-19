import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../actions/logInUser';

class Login extends Component {
	state = {
		email: null,
		password: null,
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<button onClick={() => this.props.logInUser()}>Login</button>
				<h2>{this.props.error || ''}</h2>
			</div>
		);
	}
}

const mapStateToProps = ({ error }) => ({
	error: error.login,
});

const mapDispatchToProps = {
	logInUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
