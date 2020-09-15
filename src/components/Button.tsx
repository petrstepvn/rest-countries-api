import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ clear: boolean }>`
	min-width: 120px;
	padding: 0.5rem;
	font-size: 1rem;
	border: none;
	color: ${({ theme }) => theme.color.text};
	background: ${({ theme }) => theme.color.primary};
	box-shadow: ${({ theme, clear }) => (clear ? null : theme.boxShadow)};
	border-radius: ${({ theme }) => theme.borderRadius};
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;

	:hover {
		background: ${({ theme }) => theme.color.hover};
	}

	svg {
		width: 1.4em;
		height: 1.4em;
		margin-right: 8px;
	}
`;

interface Props {
	text: string;
	icon?: any;
	onClick?: () => void;
	clear?: boolean;
}

const Button = ({ text, icon, onClick, clear = false }: Props) => {
	return (
		<StyledButton onClick={onClick} clear={clear}>
			{icon}
			{text}
		</StyledButton>
	);
};

export default Button;
