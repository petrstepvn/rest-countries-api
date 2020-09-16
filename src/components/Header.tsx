import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

import { WiDaySunny, WiMoonAltWaxingCrescent2 } from 'react-icons/wi';
const Header = styled.header`
	background: ${({ theme }) => theme.color.primary};
	box-shadow: ${({ theme }) => theme.boxShadow};
	transition: background ${({ theme }) => theme.transition};
`;

const Container = styled.div`
	max-width: ${({ theme }) => theme.width};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;
	margin: auto;
`;

const Title = styled.h2`
	color: ${({ theme }) => theme.color.text};
	transition: color ${({ theme }) => theme.transition};
`;

interface Props {
	switchTheme: () => void;
	isDark: boolean;
}

const HeaderComponent = ({ switchTheme, isDark }: Props) => (
	<Header>
		<Container>
			<Link to="/rest-countries-api/">
				<Title>Where in the World?</Title>
			</Link>
			<Button
				clear
				onClick={switchTheme}
				icon={isDark ? <WiMoonAltWaxingCrescent2 /> : <WiDaySunny />}
				text={isDark ? 'Dark Mode' : 'Light Mode'}
			/>
		</Container>
	</Header>
);

export default HeaderComponent;
