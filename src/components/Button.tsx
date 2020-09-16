import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ clear: boolean }>`
	color: ${({ theme }) => theme.color.text};
	background: ${({ theme }) => theme.color.primary};
	box-shadow: ${({ theme, clear }) => !clear && theme.boxShadow};
	border-radius: ${({ theme }) => theme.borderRadius};
	transition: background ${({ theme }) => theme.transition},
		color ${({ theme }) => theme.transition};
	min-width: 120px;
	padding: 0.5rem;
	font-size: 1rem;
	border: none;
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

const Button = ({ text, icon, onClick, clear = false }: Props) => (
	<StyledButton onClick={onClick} clear={clear}>
		{icon}
		{text}
	</StyledButton>
);
export default Button;
