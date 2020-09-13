import React, { FC } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import ControlsWrapper from './ControlsWrapper';

const Container = styled.div`
	max-width: ${({ theme }) => theme.width};
	margin: auto;
	padding: 0 1.5rem;
	height: 100%;

`;

const Input = styled.input`
	border: 0;
	flex: 1;
	padding: 1rem;
	font-family: inherit;
`;

const Homepage: FC = () => {
	return (
		<Container>
			<ControlsWrapper />
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</Container>
	);
};

export default Homepage;
