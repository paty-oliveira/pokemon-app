// @ts-ignore
import {SearchBarContainer, Input, SearchButton} from "@/components/pokemon/SearchBar/styles";
import {BsSearch} from "react-icons/bs";
import React, {useState} from "react";
import { setSearch, selectSearchPokemonName } from "@/store/features/searchSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function SearchBar() {
	const searchPokemon = useAppSelector(selectSearchPokemonName);
	const dispatch = useAppDispatch();

	const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newPokemon = event.target.value;
		dispatch(setSearch(newPokemon));
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