"use client";

// @ts-ignore
import styled from "styled-components";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";

const CardsContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  row-gap: 2rem;
`;

type GetPokemonResponse = {
	sprites: {
		other: {
			"dream_world": {
				front_default: any
			}
		}
	}
};

export default function Pokemon() {
	const [response, setResponse] = useState<GetPokemonResponse>();
	const imgUrl = response?.sprites?.other['dream_world'].front_default;

	const pokemonName = "bulbasaur";

	useEffect(() => {
		axios
			.get<GetPokemonResponse>("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
			.then((response) => setResponse(response.data))
			.catch((error: AxiosError) => console.log(error.message));

	}, [pokemonName]);

	return (
		<>
			<SearchBar />
			<CardsContainer>
			{ pokemonName && <Card name={pokemonName} imageUrl={imgUrl} />}
			</CardsContainer>
		</>
	)
}