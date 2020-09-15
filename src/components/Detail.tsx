import React from 'react';
import styled from 'styled-components';

const DetailWrapper = styled.div<{ noMinWidth: boolean }>`
	display: flex;
	flex-wrap: wrap;
	min-width: ${({ noMinWidth }) => (noMinWidth ? null : '200px')};
	white-space: nowrap;
	line-height: 1.7;
`;

const DetailTitle = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	padding-right: 0.3rem;
	text-transform: capitalize;
`;

const DetailBody = styled.p``;

interface Props {
	title: string;
	body?: any;
	noMinWidth?: boolean;
}

const Detail = ({ title, body, noMinWidth = false }: Props) => {
	return (
		<DetailWrapper noMinWidth={noMinWidth}>
			<DetailTitle>{title}:</DetailTitle>
			<DetailBody>
				{typeof body === 'object' ? body.join(', ') : body}
			</DetailBody>
		</DetailWrapper>
	);
};

export default Detail;
