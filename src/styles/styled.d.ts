import 'styled-components';

interface Color {
	background: string;
	primary: string;
	text: string;
	hover: string;
	selected: string;
	skeleton: string;
}

interface FontWeight {
	light: number;
	medium: number;
	bold: number;
}

interface Padding {
	global: string;
	main: string;
	medium: string;
	big: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		color: Color;
		fontWeight: FontWeight;
		boxShadow: string;
		width: string;
		borderRadius: string;
		padding: Padding;
		transition: string;
	}
}
