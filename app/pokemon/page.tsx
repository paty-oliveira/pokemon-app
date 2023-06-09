"use client";

import {CardContainer} from "@/components/pokemon/CardContainer";
import SearchBar from "@/components/pokemon/SearchBar/index";
import Card from "@/components/pokemon/Card/index";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import {useAppSelector} from "@/store/hooks";
import {selectSearchPokemonName, selectSkipPreFetchFlag} from "@/store/features/searchPokemon/searchSlice";
import {useGetPokemonByParamQuery} from "@/store/features/api/apiSlice";

export default function Pokemon() {
	const searchPokemon = useAppSelector(selectSearchPokemonName);
	const skipPreFetch = useAppSelector(selectSkipPreFetchFlag);

	const { data: pokemon, isFetching, isError } = useGetPokemonByParamQuery(searchPokemon, {skip: skipPreFetch});

	const imgUrl = pokemon?.sprites?.other['dream_world'].front_default;
	const pokemonName = pokemon?.forms[0].name;

	return (
		<>
			<SearchBar />
			<CardContainer>
				{
					isError ? <Alert severity="error">The pokemon does not exist! Please try again.</Alert> :
					isFetching ? <CircularProgress /> :
					pokemon? <Card name={pokemonName} imageUrl={imgUrl} /> :
					null
				}
			</CardContainer>
		</>
	)
}
