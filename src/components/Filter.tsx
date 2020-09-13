import React, { FC } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
`;

const TitleWrapper = styled.div`
	background: ${({ theme }) => theme.color.primary};
	box-shadow: ${({ theme }) => theme.boxShadow};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	width: 200px;
	padding: 1rem 1.5rem;
	border-radius: 3px;
	cursor: pointer;
	user-select: none;
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
`;

const ListItem = styled.li`
	line-height: 1.6;
	padding: 0.2rem 1.5rem;
	cursor: pointer;

	:hover {
		background: ${({ theme }) => theme.color.hover};
	}
`;

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const Filter: FC = () => {
	const [currentRegion, setCurrentRegion] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (region: string) => {
		setCurrentRegion(region);
		setIsOpen(!isOpen);
	};
	return (
		<Wrapper>
			<TitleWrapper onClick={handleOpen}>Filter by Region</TitleWrapper>
			{isOpen && (
				<ListWrapper>
					{regions.map((region) => (
						<ListItem key={region} onClick={() => handleSelect(region)}>
							{region}
						</ListItem>
					))}
				</ListWrapper>
			)}
		</Wrapper>
	);
};

export default Filter;
