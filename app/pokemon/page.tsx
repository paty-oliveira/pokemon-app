"use client";

import {CardContainer} from "@/components/pokemon/CardContainer";
import SearchBar from "@/components/pokemon/SearchBar/index";
import Card from "@/components/pokemon/Card/index";
import {useEffect, useState} from "react";
import {AxiosError} from "axios";
import {GetPokemonResponse} from "@/app/api/pokemons/types";
import {useAppSelector} from "@/store/hooks";
import {selectSearchPokemonName} from "@/store/features/searchPokemon/searchSlice";
import {getPokemonByParam} from "@/utils/api";

export default function Pokemon() {
	const [response, setResponse] = useState<GetPokemonResponse>();
	const imgUrl = response?.sprites?.other['dream_world'].front_default;

	const pokemonName = useAppSelector(selectSearchPokemonName);

	useEffect(() => {
		getPokemonByParam(pokemonName)
			.then((response) => setResponse(response))
			.catch((error: AxiosError) => console.log(error.message));

	}, [pokemonName]);

	return (
		<>
			<SearchBar />
			<CardContainer>
			{ pokemonName && <Card name={pokemonName} imageUrl={imgUrl} />}
			</CardContainer>
		</>
	)
}