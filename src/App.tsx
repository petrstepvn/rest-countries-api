import React, { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Country from './pages/Country';

const MainWrapper = styled.main`
	max-width: ${({ theme }) => theme.width};
	padding: ${({ theme }) => theme.padding.main};
	margin: auto;
`;

const App: FC = () => {
	const [isDark, setIsDark] = useState<boolean>(false);

	useEffect(() => {
		const LS = localStorage.getItem('theme');
		setIsDark(LS === 'dark' ? true : LS === 'light' ? false : true);
	}, []);

	useEffect(() => {
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}, [isDark]);

	const switchTheme = () => {
		setIsDark(isDark ? false : true);
	};

	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<GlobalStyle />
			<Router>
				<Header switchTheme={switchTheme} isDark={isDark} />
				<MainWrapper>
					<Switch>
						<Route path="/" exact component={Homepage} />
						<Route path="/country/:country" component={Country} />
					</Switch>
				</MainWrapper>
			</Router>
		</ThemeProvider>
	);
};

export default App;
