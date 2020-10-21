import React, { Component } from 'react';
import styled from 'styled-components';

class ContentBox extends Component {
	render() {
		return (
			<Content>
				<Title>{this.props.title || ''}</Title>
				<Subtitle>{this.props.subtitle || ''}</Subtitle>
				{this.props.children}
			</Content>
		);
	}
}

const Content = styled.div`
	border: 2px solid black;
	border-radius: 13px;
	min-width: 700px;
	/*max-width: 1100px; */
	margin: 0px auto;
	margin-bottom: 50px;
	padding: 10px;
`;

const Title = styled.h1`
	margin-left: 15px;
	font-size: 30px;
`;

const Subtitle = styled.h4`
	font-size: 15px;
	opacity: 40%;
`;

export default ContentBox;
