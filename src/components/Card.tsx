import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
	width: 200px;
`;

const Image = styled.img`
	display: block;
	width: 100%;
`;

const Title = styled.h3`
	margin: 1rem 0;
`;

const DetailWrapper = styled.div`
	display: flex;
`;

const DetailTitle = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	margin-right: 0.3rem;
`;

const Detail = styled.p``;

export const Card = () => {
	return (
		<Wrapper>
			<Image />
			<Title>Germany</Title>
			<DetailWrapper>
				<DetailTitle>Population:</DetailTitle>
				<Detail>81 812 313</Detail>
			</DetailWrapper>
			<DetailWrapper>
				<DetailTitle>Region:</DetailTitle>
				<Detail>Europe</Detail>
			</DetailWrapper>
			<DetailWrapper>
				<DetailTitle>Capital:</DetailTitle>
				<Detail>Berlin</Detail>
			</DetailWrapper>
		</Wrapper>
	);
};

export default Card;
