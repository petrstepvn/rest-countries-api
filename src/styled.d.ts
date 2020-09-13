import 'styled-components';

interface Color {
	background: string;
	primary: string;
	text: string;
	hover: string;
}

interface FontWeight {
	light: number;
	medium: number;
	bold: number;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		color: Color;
		fontWeight: FontWeight;
		boxShadow: string;
		width: string;
		borderRadius: string;
	}
}
