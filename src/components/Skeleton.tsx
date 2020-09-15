import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: inline-block;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, #dddddd 0%, #e8e8e8 50%, #dddddd 100%);
	background-size: 750% auto;
	animation: pulse 1.6s linear infinite;

	@keyframes pulse {
		0% {
			background-position: -125%;
		}

		40%,
		100% {
			background-position: 100%;
		}
	}
`;

const Skeleton = ({ children }: any) => {
	return <Wrapper>{children}</Wrapper>;
};

export default Skeleton;
