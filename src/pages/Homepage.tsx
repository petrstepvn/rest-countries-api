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

const Homepage: FC = () => {
	const [data, setData] = useState<any[]>([]);
	const [filter, setFilter] = useState({ region: '', text: '' });
	const [filteredData, setFilteredData] = useState<any[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag'
			);
			const json = await response.json();
			setData(json);
			setFilteredData(json);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const { region, text } = filter;
		const newData = data
			.filter((country) => country?.region.includes(region))
			.filter((country) =>
				country?.name.toLowerCase().includes(text?.toLowerCase())
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
				{filteredData.map((item, i) => (
					<Link key={i} to={`/country/${item.name}`}>
						<Card payload={item} />
					</Link>
				))}
			</CardsWrapper>
		</>
	);
};

export default Homepage;
