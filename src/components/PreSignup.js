import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class PreSignup extends Component {
	render() {
		return (
			<Container>
				<h2>
					Hello, welcome to Troidini, the bug tracking software that helps you transform your bugs into
					beautiful features. Before proceeding with setting up your account, you’ll need to either create an
					Organization or Join an existing one using an invite code. Once you're a part of an Organization,
					you’ll be able to add projects and begin tracking your issues!
				</h2>
				<ButtonContainer>
					<Link to={'/organization-setup'}>
						<Button>Begin Setup</Button>
					</Link>
					<Link to={'/register'}>
						<Button>Join Existing</Button>
					</Link>
				</ButtonContainer>
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;
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

export default PreSignup;
