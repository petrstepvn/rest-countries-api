import React from 'react';
import styled from 'styled-components';
import { thousandSeparator } from '../utils';
import Detail from './Detail';

const Wrapper = styled.article`
	background: ${({ theme }) => theme.color.primary};
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: ${({ theme }) => theme.borderRadius};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
	height: 100%;

	&:hover img {
		transform: scale(1.15);
	}
`;

const ImageWrapper = styled.div`
	width: 100%;
	height: 200px;
	overflow: hidden;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	border-top-left-radius: ${({ theme }) => theme.borderRadius};
	border-top-right-radius: ${({ theme }) => theme.borderRadius};
	object-fit: contain;
	transition: transform 0.3s ease;
`;

const DetailOuterWrapper = styled.div`
	padding: 1rem;
	line-height: 1.7;
`;

const Title = styled.h3`
	margin-bottom: 1rem;
`;

interface Props {
	payload: {
		name: string;
		capital: string;
		region: string;
		population: number;
		flag: string;
	};
}

const Card = ({ payload }: Props) => {
	const { name, capital, region, population, flag } = payload;

	return (
		<Wrapper>
			<ImageWrapper>
				<Image src={flag} />
			</ImageWrapper>
			<DetailOuterWrapper>
				<Title>{name}</Title>
				<Detail title="Population" body={thousandSeparator(population)} />
				<Detail title="Region" body={region} />
				<Detail title="Capital" body={capital} />
			</DetailOuterWrapper>
		</Wrapper>
	);
};

export default Card;
