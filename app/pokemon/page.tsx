"use client";

import {CardContainer} from "@/components/pokemon/CardContainer";
import SearchBar from "@/components/pokemon/SearchBar/index";
import Card from "@/components/pokemon/Card/index";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {GetPokemonResponse} from "@/app/api/pokemons/types";

export default function Pokemon() {
	const [response, setResponse] = useState<GetPokemonResponse>();
	const imgUrl = response?.sprites?.other['dream_world'].front_default;

	const pokemonName = "bulbasaur";

	useEffect(() => {
		axios
			.get<GetPokemonResponse>("/api/pokemons/" + "?name=" + pokemonName)
			.then((response) => setResponse(response.data))
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