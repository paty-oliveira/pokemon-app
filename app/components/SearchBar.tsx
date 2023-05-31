// @ts-ignore
import styled from "styled-components";
import {BsSearch} from "react-icons/bs";

const SearchBarContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

const Input = styled.input`
  border-radius: 0.75rem;
  width: 20%;
  padding: 0.5rem;
  background-color: var(--search-bar-color);
  border: var(--search-bar-color) solid 2px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.42);
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.75rem;
  width: 7%;
  background-color: var(--button-color);
  border: var(--button-color);
  font-weight: bold;
  font-size: 1rem;
`;

export default function SearchBar() {
	return (
		<SearchBarContainer>
			<Input placeholder={"Search your Pokémon"} />
			<SearchButton disabled><BsSearch/></SearchButton>
		</SearchBarContainer>
	)
}