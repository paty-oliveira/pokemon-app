"use client";

// @ts-ignore
import styled from "styled-components";
import SearchBar from "@/app/components/SearchBar";
import Card from "@/app/components/Card";
import {useState} from "react";
import {pokemonById} from "@/app/mocks/pokemonById";

const CardsContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  row-gap: 2rem;
`;

export default function Pokemon() {
	const pokemonName = pokemonById.forms[0].name;
	const pokemonUrl = pokemonById.sprites.other.dream_world.front_default;

	return (
		<>
			<SearchBar />
			<CardsContainer>
				<Card name={pokemonName} imageUrl={pokemonUrl}/>
			</CardsContainer>
		</>
	)

}