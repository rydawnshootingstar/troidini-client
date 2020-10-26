import React from 'react';
import styled from 'styled-components';

// OptionPickers are radio style and expect props like...
/* 
title={"User Name"} 
stateVariable={"type"}
stateValue={this.state.type} 
onChange={this.handleChange}
options={
    [
        {
            name: 'Developer',
            description: 'Developers resolve issues and track their status, keeping bugs associated with the correct repos',
            value: 'Developer',
        },
        {
            name: 'Support',
            description: 'Support users help the dev team by adding information to issues and communicating intended behavior',
            value: 'Support',
        }
    ]
}

*/

const OptionForm = (props) => (
	<React.Fragment>
		<OptionTitle>{props.title}</OptionTitle>
		<OptionPicker>
			{props.options.map(({ name, description, value }, index) => (
				<Option key={index}>
					<OptionIcon />
					<OptionName>{name}</OptionName>
					<OptionDescription>{description}</OptionDescription>
					<OptionRadio
						type="radio"
						name={props.stateVariable}
						value={value}
						checked={props.stateValue === value}
						onChange={props.handleChange}
					/>
				</Option>
			))}
		</OptionPicker>
	</React.Fragment>
);

export default OptionForm;

const OptionTitle = styled.h3``;

const OptionPicker = styled.div`
	display: flex;
	width: 100%;
	align-items: baseline;
	justify-content: space-around;
`;

const Option = styled.div`
	width: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const OptionIcon = styled.div`
	width: 150px;
	height: 150px;
	border: 2px solid black;
`;

const OptionRadio = styled.input`
	height: 25px;
	width: 25px;
	background-color: #eee;
	border-radius: 50%;
`;

const OptionName = styled.p`
	font-size: 20px;
	font-weight: 600;
	margin-top: 5px;
	margin-bottom: 0px;
`;

const OptionDescription = styled.p`
	font-size: 13px;
	opacity: 70%;
`;
