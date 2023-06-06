import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit";

type SearchState = {
	searchTerm: string | null;
	skipPreFetch: boolean;
}

const initialState: SearchState = {
	searchTerm: null,
	skipPreFetch: true
};

const searchSlice = createSlice({
	name: "searchPokemon",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
		},

		setSkipPreFetch: (state, action: PayloadAction<boolean>) => {
			state.skipPreFetch = action.payload;
		}
	}
});

export const selectSearchPokemonName = (state:any) => state.searchPokemon.searchTerm;

export const selectSkipPreFetchFlag = (state:any) => state.searchPokemon.skipPreFetch;

export const { setSearch, setSkipPreFetch } = searchSlice.actions;
export default searchSlice.reducer;