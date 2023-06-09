import {RootState} from "@/store";
import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

type SearchState = {
	searchTerm: string | null;
	skipPreFetch: boolean;
}

const initialState: SearchState = {
	searchTerm: null,
	skipPreFetch: true
};

const searchSlice:Slice = createSlice({
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

export const selectSearchPokemonName = (state:RootState) => state.searchPokemon.searchTerm;

export const selectSkipPreFetchFlag = (state:RootState) => state.searchPokemon.skipPreFetch;

export const { setSearch, setSkipPreFetch } = searchSlice.actions;
export default searchSlice.reducer;