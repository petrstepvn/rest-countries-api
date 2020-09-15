import { DefaultTheme } from 'styled-components';

const sharedStyles = {
	fontWeight: {
		light: 300,
		medium: 600,
		bold: 800,
	},
	boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.18)',
	// '0 0.7px 0.9px rgba(0,0,0,.024), 0 1.9px 2.4px rgba(0,0,0,.035), 0 4.5px 5.7px rgba(0,0,0,.046), 0 15px 19px rgba(0,0,0,.07);',
	width: '1440px',
	borderRadius: '5px',
	padding: {
		global: '2.5rem',
		main: '1.5rem',
		medium: '2rem',
		big: '3rem',
	},
};

export const lightTheme: DefaultTheme = {
	color: {
		background: 'hsl(0, 0%, 98%)',
		primary: 'hsl(0, 0%, 100%)',
		text: 'hsl(200, 15%, 8%)',
		textSecondary: ' hsl(200, 15%, 8%)',
		hover: 'hsl(0, 0%, 90%)',
		selected: 'hsl(0, 0%, 80%)',
	},
	...sharedStyles,
};

export const darkTheme: DefaultTheme = {
	color: {
		background: 'hsl(207, 26%, 17%)',
		primary: 'hsl(209, 23%, 22%)',
		text: ' hsl(0, 0%, 100%)',
		textSecondary: ' hsl(0, 0%, 100%)',
		hover: 'hsl(207, 26%, 16%)',
		selected: 'hsl(207, 26%, 13%)',
	},
	...sharedStyles,
};
