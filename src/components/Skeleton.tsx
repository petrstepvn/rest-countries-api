import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	background: ${({ theme }) => theme.color.skeleton};
	border-top-left-radius: inherit;
	transition: background ${({ theme }) => theme.transition};
	position: absolute;
	top: 0;
	left: 0;
	display: inline-block;
	width: 100%;
	height: 100%;
	background-size: 750% auto;
	animation: pulse 1.6s linear infinite;

	@keyframes pulse {
		0% {
			background-position: 100%;
		}

		40%,
		100% {
			background-position: -150%;
		}
	}
`;

const Skeleton = () => <Wrapper />;

export default Skeleton;
