import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const Wrapper = styled.div`
	position: relative;
`;

const TitleWrapper = styled.div`
	background: ${({ theme }) => theme.color.primary};
	box-shadow: ${({ theme }) => theme.boxShadow};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	border-radius: ${({ theme }) => theme.borderRadius};
	width: 200px;
	padding: 1rem 1.5rem;
	cursor: pointer;
	user-select: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ListWrapper = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	margin-top: 0.2rem;
	list-style: none;
	width: 200px;
	background: ${({ theme }) => theme.color.primary};
	box-shadow: ${({ theme }) => theme.boxShadow};
	padding: 0.8rem 0;
	border-radius: ${({ theme }) => theme.borderRadius};
`;

const ListItem = styled.li<{ selected: boolean }>`
	line-height: 1.6;
	padding: 0.2rem 1.5rem;
	cursor: pointer;

	background: ${({ theme, selected }) =>
		selected ? theme.color.selected : null};

	:hover {
		background: ${({ theme }) => theme.color.hover};
	}
`;

const regions = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

interface Props {
	handleRegion: (region: string) => void;
}

const Filter = ({ handleRegion }: Props) => {
	const [currentRegion, setCurrentRegion] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (region: string) => {
		setCurrentRegion(region);
		setIsOpen(!isOpen);
		handleRegion(region === 'All' ? '' : region);
	};
	return (
		<Wrapper>
			<TitleWrapper onClick={handleOpen}>
				<p>Filter by Region</p>
				{isOpen ? <MdExpandLess /> : <MdExpandMore />}
			</TitleWrapper>
			{isOpen && (
				<ListWrapper>
					{regions.map((region) => (
						<ListItem
							selected={currentRegion === region}
							key={region}
							onClick={() => handleSelect(region)}
						>
							{region}
						</ListItem>
					))}
				</ListWrapper>
			)}
		</Wrapper>
	);
};

export default Filter;
