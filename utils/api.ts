import axios from "axios";
import {GetPokemonResponse} from "@/app/api/pokemons/types";

const endpoint: string = "/api/pokemons/";
export async function getPokemonByParam(param:string) {
	const pokemonByParam = endpoint + "?param=" + param;

	const { data } = await axios.get<GetPokemonResponse>(pokemonByParam)
	return data
}