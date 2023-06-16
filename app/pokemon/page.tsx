"use client";

import {CardContainer} from "@/components/pokemon/CardContainer";
import SearchBar from "@/components/pokemon/SearchBar/index";
import Card from "@/components/pokemon/Card/index";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {GetPokemonResponse} from "@/app/api/pokemons/types";
import { usePokemonStore } from "@/store/store";

export default function Pokemon() {
	const {searchPokemon} = usePokemonStore();

	const [response, setResponse] = useState<GetPokemonResponse>();
	const imgUrl = response?.sprites?.other['dream_world'].front_default;

	useEffect(() => {
		axios
			.get<GetPokemonResponse>("/api/pokemons/" + "?name=" + searchPokemon)
			.then((response) => setResponse(response.data))
			.catch((error: AxiosError) => console.log(error.message));

	}, [searchPokemon]);

	return (
		<>
			<SearchBar />
			<CardContainer>
			{ searchPokemon && <Card name={searchPokemon} imageUrl={imgUrl} />}
			</CardContainer>
		</>
	)
}