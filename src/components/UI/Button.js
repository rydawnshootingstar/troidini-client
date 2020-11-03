import React from 'react';
import styled from 'styled-components';

const Button = (props) => <CustomButton {...props}>{props.children}</CustomButton>;

export default Button;

const CustomButton = styled.button`
	display: flex;
	background-color: ${(props) => (props.secondary ? props.secondary : '#FFF')};
	color: ${(props) => (props.tertiary ? props.tertiary : '#000')};
	justify-content: center;
	align-items: center;
	min-width:${(props) => (props.small ? '90px' : '160px')}; 
	height: ${(props) => (props.small ? '40px' : '60px')}; ;
	border-radius: 15px;
	font-size: ${(props) => (props.small ? '15px' : '25px')}; ;
	cursor: pointer;
	&:hover {
		/* background-color: ${colors.teal}; */
	}
`;
