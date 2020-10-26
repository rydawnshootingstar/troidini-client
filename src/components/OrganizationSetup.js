import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createOrganization } from '../actions/createOrganization';
import styled from 'styled-components';

import { SliderPicker } from 'react-color';

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

	onChangeCompletePrimary = (color, event) => {
		this.setState({
			theme_primary: color.hex,
		});
	};

	onChangeCompleteSecondary = (color, event) => {
		this.setState({
			theme_secondary: color.hex,
		});
	};

	onChangeCompleteTertiary = (color, event) => {
		this.setState({
			theme_tertiary: color.hex,
		});
	};

	onColorChange = (color) => {
		this.setState({
			activeColor: color.hex,
		});
	};

	render() {
		return (
			<Container
				primary={this.state.theme_primary}
				secondary={this.state.theme_secondary}
				tertiary={this.state.theme_tertiary}
			>
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
					<h2>Custom Theme</h2>
					<h4>Primary Color</h4>
					<SliderPicker color={'#FFF'} onChangeComplete={this.onChangeCompletePrimary} />
					<Input
						short
						type="text"
						name="theme_primary"
						value={this.state.theme_primary}
						onChange={this.handleChange}
						placeholder="#xxxxxx"
					></Input>

					<h4>Secondary Color</h4>
					<SliderPicker color={'#FFF'} onChangeComplete={this.onChangeCompleteSecondary} />
					<Input
						short
						type="text"
						name="theme_secondary"
						value={this.state.theme_secondary}
						onChange={this.handleChange}
						placeholder="#xxxxxx"
					></Input>
					<h4>Tertiary Color</h4>
					<SliderPicker color={'#FFF'} onChangeComplete={this.onChangeCompleteTertiary} />
					<Input
						short
						type="text"
						name="theme_tertiary"
						value={this.state.theme_tertiary}
						onChange={this.handleChange}
						placeholder="#xxxxxx"
					></Input>
				</ContentBox>

				<Button
					primary={this.state.theme_primary}
					secondary={this.state.theme_secondary}
					tertiary={this.state.theme_tertiary}
					onClick={() => this.props.createOrganization({ ...this.state })}
				>
					Continue
				</Button>
				<ErrorMessage>{this.props.organizationError || ''}</ErrorMessage>
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
	width: ${(props) => (props.short ? '100px' : '400px')};
	height: 30px;
`;

const Button = styled.button`
	display: flex;
	background-color: ${(props) => (props.secondary ? props.secondary : '#FFF')};
	color: ${(props) => (props.tertiary ? props.tertiary : '#000')};
	justify-content: center;
	align-items: center;
	width:${(props) => (props.small ? '80px' : '160px')}; 
	height: 60px;
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

const mapStateToProps = (state) => ({
	email: state.partialUser.email,
	password: state.partialUser.password,
	organizationError: state.error.create_organization,
});

const mapDispatchToProps = {
	createOrganization,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationSetup);
