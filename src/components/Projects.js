import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';

class Projects extends Component {
	componentDidMount() {
		//console.log(this.props.user);
		axios
			.get(`http://localhost:5555/organization/${this.props.user.organization_id}`, { withCredentials: true })
			.then((res) => {
				console.log(res);
			});
	}
	render() {
		return <div>Projects</div>;
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
