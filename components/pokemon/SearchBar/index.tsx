// @ts-ignore
import {SearchBarContainer, Input, SearchButton} from "@/components/pokemon/SearchBar/styles";
import {BsSearch} from "react-icons/bs";
import React, {useState} from "react";

export default function SearchBar() {
	const [searchPokemon, setSearchPokemon] = useState("");

	const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newSearchTerm = event.target.value;
		setSearchPokemon(newSearchTerm);
	}

	return (
		<SearchBarContainer>
			<Input
				placeholder={"Search your Pokémon"}
				value={searchPokemon}
				onChange={handleSearchTermChange}
				name={"search-input"}
			/>
			<SearchButton><BsSearch/></SearchButton>
		</SearchBarContainer>
	)
}