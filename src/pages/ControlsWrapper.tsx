import React, { FC } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Filter from '../components/Filter';

const Wrapper = styled.div`
	padding: 2rem 0;
	display: flex;
	justify-content: space-between;
`;

const ControlsWrapper: FC = () => {
	return (
		<Wrapper>
			<Input />
			<Filter />
		</Wrapper>
	);
};

export default ControlsWrapper;