import React from 'react';
import styled from 'styled-components';

import { MdSearch } from 'react-icons/md';

const Wrapper = styled.div`
	background: ${({ theme }) => theme.color.primary};
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-radius: ${({ theme }) => theme.borderRadius};
	transition: background ${({ theme }) => theme.transition};
	max-width: 400px;
	width: 100%;
	display: flex;
	align-items: center;
`;

const Input = styled.input`
	background: ${({ theme }) => theme.color.primary};
	transition: background ${({ theme }) => theme.transition},
		color ${({ theme }) => theme.transition};
	color: inherit;
	border: 0;
	flex: 1;
	padding: 1rem;
	font-family: inherit;
	outline: none;
	font-size: inherit;

	::placeholder {
		color: currentColor;
	}
`;

const StyledMdSearch = styled(MdSearch)`
	height: 30px;
	width: 30px;
	margin-left: 1rem;
`;

interface Props {
	handleSearch: (text: string) => void;
}

const Search = ({ handleSearch }: Props) => (
	<Wrapper>
		<StyledMdSearch />
		<Input
			type="text"
			placeholder="Search for a country..."
			onChange={(e) => handleSearch(e.target.value)}
		/>
	</Wrapper>
);

export default Search;
