"use client";

// @ts-ignore
import styled from "styled-components";
import SearchBar from "@/app/components/SearchBar";
import Card from "@/app/components/Card";

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
	return (
		<>
			<SearchBar />
			<CardsContainer>

			</CardsContainer>
		</>
	)

}