"use client";

import {CardContainer} from "@/components/pokemon/CardContainer";
import SearchBar from "@/components/pokemon/SearchBar/index";
import Card from "@/components/pokemon/Card/index";
import {useAppSelector} from "@/store/hooks";
import {selectSearchPokemonName} from "@/store/features/searchPokemon/searchSlice";
import { useGetPokemonByParamQuery} from "@/store/features/api/apiSlice";

export default function Pokemon() {
	const searchPokemon = useAppSelector(selectSearchPokemonName);
	const { data: pokemon, isSuccess } = useGetPokemonByParamQuery(searchPokemon);

	const imgUrl = pokemon?.sprites?.other['dream_world'].front_default;
	const pokemonName = pokemon?.forms[0].name;

	return (
		<>
			<SearchBar />
			<CardContainer>
			{ isSuccess && <Card name={pokemonName} imageUrl={imgUrl} />}
			</CardContainer>
		</>
	)
}
