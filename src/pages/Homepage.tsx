import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Search from '../components/Search';
import Filter from '../components/Filter';
import { Link } from 'react-router-dom';

const ControlsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	& > * {
		margin-bottom: ${({ theme }) => theme.padding.main};
	}
`;

const CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
	gap: 3rem;
`;

interface Data {
	name: string;
	population: number;
	region: string;
	capital: string;
	flag: string;
}

interface FilteredData extends Data {
	show: boolean;
}

interface Filter {
	region: string;
	text: string;
}

const Homepage: FC = () => {
	const [data, setData] = useState<Data[]>([]);
	const [filter, setFilter] = useState<Filter>({ region: '', text: '' });
	const [filteredData, setFilteredData] = useState<FilteredData[]>([]);

	useEffect(() => {
		const url =
			'https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag';
		const abortController = new AbortController();
		const abortSignal = { signal: abortController.signal };

		const fetchData = async () => {
			try {
				const response = await fetch(url, abortSignal);
				const json = await response.json();
				setData(json);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();

		return () => abortController.abort();
	}, []);

	useEffect(() => {
		const { region, text } = filter;
		const newData = data.map((country) =>
			country.region.includes(region) &&
			country.name.toLowerCase().includes(text.toLowerCase())
				? { ...country, show: true }
				: { ...country, show: false }
		);
		setFilteredData(newData);
	}, [filter, data]);

	const handleSearch = (text: string) => {
		setFilter({ ...filter, text: text });
	};

	const handleRegion = (region: string) => {
		setFilter({ ...filter, region: region });
	};

	return (
		<>
			<ControlsWrapper>
				<Search handleSearch={handleSearch} />
				<Filter handleRegion={handleRegion} />
			</ControlsWrapper>
			<CardsWrapper>
				{filteredData.map((country, i) => (
					<Link
						style={country.show ? { display: 'block' } : { display: 'none' }}
						key={i}
						to={`/country/${country.name}`}
					>
						<Card payload={country} />
					</Link>
				))}
			</CardsWrapper>
		</>
	);
};

export default Homepage;
