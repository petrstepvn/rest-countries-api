import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Nunito Sans', sans-serif;
		background: ${({ theme }) => theme.color.background};
		color: ${({ theme }) => theme.color.text};
		transition: background ${({ theme }) => theme.transition}, color ${({
	theme,
}) => theme.transition};

	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;

export default GlobalStyle;
