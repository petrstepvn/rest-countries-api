import React, { useState } from 'react';
import styled from 'styled-components';
import { thousandSeparator } from '../utils';
import Detail from './Detail';
import Skeleton from './Skeleton';

const Wrapper = styled.article`
	background: ${({ theme }) => theme.color.primary};
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: ${({ theme }) => theme.borderRadius};
	transition: background ${({ theme }) => theme.transition};
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
	position: relative;
	border-top-left-radius: ${({ theme }) => theme.borderRadius};
	border-top-right-radius: ${({ theme }) => theme.borderRadius};
`;

const Image = styled.img<{ isLoading: boolean }>`
	opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
	transition: transform 0.3s ease, opacity 0.3s;
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
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const { name, capital, region, population, flag } = payload;

	return (
		<Wrapper>
			<ImageWrapper>
				<Image
					isLoading={isLoading}
					src={flag}
					alt={name}
					onLoad={() => setIsLoading(false)}
				/>
				{isLoading && <Skeleton />}
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
