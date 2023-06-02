import axios, {AxiosResponse} from "axios";
import {NextResponse} from "next/server";
import {GetPokemonResponse} from "@/app/api/pokemons/types";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const pokemonName = searchParams.get("name");
	const response: AxiosResponse<GetPokemonResponse> = await axios
		.get<GetPokemonResponse>("https://pokeapi.co/api/v2/pokemon/" + pokemonName);

	return NextResponse.json(response.data);
}