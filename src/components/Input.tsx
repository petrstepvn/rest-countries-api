import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	max-width: 400px;
	width: 100%;
	display: flex;
	background: white;
	box-shadow: ${({ theme }) => theme.boxShadow};
	`;

const Input = styled.input`
	border: 0;
	flex: 1;
	padding: 1rem;
	font-family: inherit;
`;

const InputComponent: FC = () => {
	return (
		<Wrapper>
			<Input type="text" placeholder="Search for a country..." />
		</Wrapper>
	);
};

export default InputComponent;
