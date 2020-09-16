import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { thousandSeparator } from '../utils';

import { MdKeyboardBackspace } from 'react-icons/md';
import Button from '../components/Button';
import Detail from '../components/Detail';
import Skeleton from '../components/Skeleton';

const InnerWrapper = styled.section`
	margin-top: ${({ theme }) => theme.padding.big};
	display: flex;
	flex-wrap: wrap;

	& > * {
		width: 100%;

		@media (min-width: 700px) {
			width: 50%;
		}
	}
`;

const ImageWrapper = styled.div<{ isLoading: boolean }>`
	height: ${({ isLoading }) => isLoading && '400px'};
	position: relative;
	border-radius: ${({ theme }) => theme.borderRadius};
	box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Image = styled.img<{ isLoading: boolean }>`
	display: block;
	width: 100%;
	height: 100%;
	border-radius: inherit;
	opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
	transition: opacity ${({ theme }) => theme.transition};
`;

const Title = styled.h1`
	font-size: 2em;
`;

const RightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: ${({ theme }) => theme.padding.medium};

	@media (min-width: 700px) {
		padding: ${({ theme }) => theme.padding.medium};
	}
`;

const DetailsWrapper = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	padding: ${({ theme }) => theme.padding.main} 0;
	& > * {
		width: 50%;
	}
`;

const BordersWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	> * {
		margin: 0.3rem;
	}
`;

interface CountryData {
	name?: string;
	nativeName?: string;
	population?: number;
	region?: string;
	subregion?: string;
	capital?: string;
	topLevelDomain?: string[];
	currencies?: [{ name: string }];
	languages?: [{ name: string }];
	borders?: string[];
	flag?: string;
}

const Country = () => {
	const [countryData, setCountryData] = useState<CountryData>({});
	const [borders, setBorders] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	// TS error: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/41674
	const { country }: any = useParams();

	useEffect(() => {
		setIsLoading(true);
		const url = 'https://restcountries.eu/rest/v2';
		const abortController = new AbortController();
		const abortSignal = { signal: abortController.signal };

		const fetchData = async () => {
			try {
				const response = await fetch(
					`${url}/name/${country}?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag`,
					abortSignal
				);
				const json = await response.json();

				if (json[0].borders.length) {
					const response2 = await fetch(
						`${url}/alpha?fields=name&codes=${json[0].borders.join(';')}`,
						abortSignal
					);
					const json2 = await response2.json();
					setBorders(json2.map((item: { name: string }) => item.name));
				}
				setCountryData(json[0]);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();

		return () => abortController.abort();
	}, [country]);

	const {
		name,
		nativeName,
		population,
		region,
		subregion,
		capital,
		topLevelDomain,
		currencies,
		languages,
		flag,
	} = countryData;

	return (
		<>
			<Link to="/">
				<Button text="Back" icon={<MdKeyboardBackspace />} />
			</Link>
			<InnerWrapper>
				<ImageWrapper isLoading={isLoading}>
					<Image
						isLoading={isLoading}
						src={flag}
						alt={name}
						onLoad={() => setIsLoading(false)}
					/>
					{isLoading && <Skeleton />}
				</ImageWrapper>
				<RightWrapper>
					<Title>{name}</Title>
					<DetailsWrapper>
						<Detail title="Native name" body={nativeName} />
						<Detail title="Population" body={thousandSeparator(population)} />
						<Detail title="Region" body={region} />
						<Detail title="Sub region" body={subregion} />
						<Detail title="Capital" body={capital} />
						<Detail title="Top Level Domain" body={topLevelDomain} />
						<Detail
							title="Currencies"
							body={currencies?.map(
								(currency: { name: string }) => currency.name
							)}
						/>
						<Detail
							title="Languages"
							body={languages?.map(
								(language: { name: string }) => language.name
							)}
						/>
					</DetailsWrapper>
					<BordersWrapper>
						<Detail title="Border countries" noMinWidth />
						{borders?.map((border, i) => (
							<Link key={i} to={`/country/${border}`}>
								<Button text={border} />
							</Link>
						))}
					</BordersWrapper>
				</RightWrapper>
			</InnerWrapper>
		</>
	);
};

export default Country;
