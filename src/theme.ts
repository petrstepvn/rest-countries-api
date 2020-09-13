import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
	color: {
		background: 'hsl(0, 0%, 98%)',
		primary: 'hsl(0, 0%, 100%)',
		text: 'hsl(200, 15%, 8%)',
		hover: 'hsl(0, 0%, 90%)',
	},
	fontWeight: {
		light: 300,
		medium: 600,
		bold: 800,
	},
	boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
	width: '1440px',
	borderRadius: '5px',
};

export const darkTheme: DefaultTheme = {
	...lightTheme,
	color: {
		background: 'hsl(207, 26%, 17%)',
		primary: 'hsl(209, 23%, 22%)',
		text: ' hsl(0, 0%, 100%)',
		hover: 'hsl(207, 26%, 17%)',
	},
};
