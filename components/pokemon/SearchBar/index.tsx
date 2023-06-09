// @ts-ignore
import {SearchBarContainer, Input, SearchButton} from "@/components/pokemon/SearchBar/styles";
import {BsSearch} from "react-icons/bs";
import React, {useRef} from "react";
import { setSearch, setSkipPreFetch } from "@/store/features/searchPokemon/searchSlice";
import { useAppDispatch } from "@/store/hooks";

export default function SearchBar() {
	const dispatch = useAppDispatch();
	const inputRef = useRef<any>("");

	const handleOnClick = () => {
		const newPokemon = inputRef.current.value.toLowerCase();
		dispatch(setSearch(newPokemon));
		inputRef.current.value = ""
		// More info here: https://redux-toolkit.js.org/rtk-query/usage/conditional-fetching
		dispatch(setSkipPreFetch(false));
	}

	return (
		<SearchBarContainer>
			<Input
				placeholder={"Search your Pokémon"}
				type={"text"}
				ref={inputRef}
				name={"search-input"}
			/>
			<SearchButton onClick={handleOnClick}><BsSearch/></SearchButton>
		</SearchBarContainer>
	)
}