import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Button from '../components/Button';
import Detail from '../components/Detail';

import { MdKeyboardBackspace } from 'react-icons/md';
import { thousandSeparator } from '../utils';

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

const Image = styled.img`
	/* max-width: 90%; */
	height: 100%;
	display: block;
	border-radius: ${({ theme }) => theme.borderRadius};
	box-shadow: ${({ theme }) => theme.boxShadow};
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

interface Props {
	match: any;
}

interface CountryData {
	name?: string;
	nativeName?: string;
	population?: number;
	region?: string;
	subregion?: string;
	capital?: string;
	topLevelDomain?: [];
	currencies?: [];
	languages?: [];
	borders?: [];
	flag?: string;
}

const Country = ({ match }: Props) => {
	const [countryData, setCountryData] = useState<CountryData>({});
	const [borders, setBorders] = useState<[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://restcountries.eu/rest/v2/name/${match.params.country}?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag`
			);
			const json = await response.json();

			if (json[0].borders.length) {
				const response2 = await fetch(
					`https://restcountries.eu/rest/v2/alpha?fields=name&codes=${json[0].borders.join(
						';'
					)}`
				);
				const json2 = await response2.json();
				setBorders(json2.map((item: { name: string }) => item.name));
			}

			setCountryData(json[0]);
		};
		fetchData();
	}, [match]);

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
				<Image src={flag} />
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
