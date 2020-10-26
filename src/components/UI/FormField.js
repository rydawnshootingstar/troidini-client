import React from 'react';
import styled from 'styled-components';

const FormField = (props) => (
	<Field>
		<Label>{props.label || ''}</Label>
		{props.children}
	</Field>
);

const Label = styled.p`
	margin-right: 10px;
	width: 20%;
`;

const Field = styled.div`
	flex-wrap: wrap;
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 15px;
`;

export default FormField;
