import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	background: ${({ theme }) => theme.color.primary};
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Container = styled.div`
	max-width: ${({ theme }) => theme.width};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;
	margin: auto;
`;

const Title = styled.h2`
	color: ${({ theme }) => theme.color.text};
`;

export const HeaderComponent = () => {
	return (
		<Header>
			<Container>
				<Title>Where in the World?</Title>
				d
			</Container>
		</Header>
	);
};

export default HeaderComponent;
