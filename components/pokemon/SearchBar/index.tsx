import {SearchBarContainer, Input, SearchButton} from "@/components/pokemon/SearchBar/styles";
import {BsSearch} from "react-icons/bs";
import React, {useState} from "react";
import { setSearch, setSkipPreFetch } from "@/store/features/searchPokemon/searchSlice";
import { useAppDispatch } from "@/store/hooks";

export default function SearchBar() {
	const [inputValue, setInputValue] = useState<string>("");
	const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);
	const dispatch = useAppDispatch();

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue: string = e.target.value.toLowerCase();
		setInputValue(newValue);
		setIsBtnDisabled(!newValue);
	}

	const handleOnClick = () => {
		dispatch(setSearch(inputValue));
		// More info here: https://redux-toolkit.js.org/rtk-query/usage/conditional-fetching
		dispatch(setSkipPreFetch(false));
	}

	return (
		<SearchBarContainer>
			<Input
				placeholder={"Search your Pokémon"}
				type={"text"}
				name={"search-input"}
				onChange={handleOnChange}
				value={inputValue}
			/>
			<SearchButton onClick={handleOnClick} disabled={isBtnDisabled}>
				<BsSearch/>
			</SearchButton>
		</SearchBarContainer>
	)
}
