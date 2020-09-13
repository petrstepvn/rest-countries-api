import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../theme';

const ThemeManager: FC = ({ children }) => {
	return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default ThemeManager;
