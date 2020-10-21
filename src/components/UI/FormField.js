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
`;

const Field = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 15px;
`;

export default FormField;
