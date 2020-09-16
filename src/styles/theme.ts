import { DefaultTheme } from 'styled-components';

const sharedStyles = {
	fontWeight: {
		light: 300,
		medium: 600,
		bold: 800,
	},
	boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.18)',
	width: '1440px',
	borderRadius: '5px',
	padding: {
		global: '2.5rem',
		main: '1.5rem',
		medium: '2rem',
		big: '3rem',
	},
	transition: '0.3s',
};

export const lightTheme: DefaultTheme = {
	color: {
		background: 'hsl(0, 0%, 98%)',
		primary: 'hsl(0, 0%, 100%)',
		text: 'hsl(200, 15%, 8%)',
		hover: 'hsl(0, 0%, 90%)',
		selected: 'hsl(0, 0%, 80%)',
		skeleton:
			'linear-gradient(to right, #dddddd 0%, #e8e8e8 50%, #dddddd 100%)',
	},
	...sharedStyles,
};

export const darkTheme: DefaultTheme = {
	color: {
		background: 'hsl(207, 26%, 17%)',
		primary: 'hsl(209, 23%, 22%)',
		text: ' hsl(0, 0%, 100%)',
		hover: 'hsl(207, 26%, 16%)',
		selected: 'hsl(207, 26%, 13%)',
		skeleton:
			'linear-gradient(to right, #202c37 0%, #24313e 50%, #202c37 100%)',
	},
	...sharedStyles,
};
