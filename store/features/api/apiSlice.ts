import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "/api"}),
	endpoints: (builder) => ({
		getPokemonByParam: builder.query({
			query: param => `/pokemons?param=${param}`
		})
	})
})

// @ts-ignore
export const { useGetPokemonByParamQuery } = apiSlice;

