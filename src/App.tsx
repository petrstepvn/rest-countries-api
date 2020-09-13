import React, { FC } from 'react';
import Header from './components/Header';
import InputComponent from './components/Input';
import Homepage from './pages/Homepage';

const App: FC = () => {
	return (
		<>
			<Header />
			<Homepage/>
		</>
	);
};

export default App;
