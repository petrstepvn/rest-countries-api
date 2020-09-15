import React from 'react';
import styled from 'styled-components';

import { MdSearch } from 'react-icons/md';

const Wrapper = styled.div`
	max-width: 400px;
	width: 100%;
	display: flex;
	background: ${({ theme }) => theme.color.primary};
	box-shadow: ${({ theme }) => theme.boxShadow};
	display: flex;
	align-items: center;
	border-radius: ${({ theme }) => theme.borderRadius};
`;

const Input = styled.input`
	background: ${({ theme }) => theme.color.primary};
	color: inherit;
	border: 0;
	flex: 1;
	padding: 1rem;
	font-family: inherit;
	outline: none;
	font-size: inherit;
	border-top-right-radius: ${({ theme }) => theme.borderRadius};
	border-bottom-right-radius: ${({ theme }) => theme.borderRadius};

	::placeholder {
		color: ${({ theme }) => theme.color.textSecondary};
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

const Search = ({ handleSearch }: Props) => {
	return (
		<Wrapper>
			<StyledMdSearch />
			<Input
				type="text"
				placeholder="Search for a country..."
				onChange={(e) => handleSearch(e.target.value)}
			/>
		</Wrapper>
	);
};

export default Search;
