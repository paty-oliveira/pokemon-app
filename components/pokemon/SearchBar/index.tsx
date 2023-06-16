// @ts-ignore
import {SearchBarContainer, Input, SearchButton} from "@/components/pokemon/SearchBar/styles";
import {BsSearch} from "react-icons/bs";
import React, {useState} from "react";
import { usePokemonStore } from "@/store/store";

export default function SearchBar() {
	const [inputValue, setInputValue] = useState<string>("");
	const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);
	const { updateSearchPokemon } = usePokemonStore();

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setInputValue(newValue);
		setIsBtnDisabled(!newValue);
	}

	const handleOnClick = () => {
		updateSearchPokemon(inputValue);
		setInputValue("");
	}

	return (
		<SearchBarContainer>
			<Input
				placeholder={"Search your Pokémon"}
				name={"search-input"}
				value={inputValue}
				onChange={handleOnChange}
			/>
			<SearchButton onClick={handleOnClick} disabled={isBtnDisabled}>
				<BsSearch/>
			</SearchButton>
		</SearchBarContainer>
	)
}