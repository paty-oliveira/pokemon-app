import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit";

type SearchState = {
	searchTerm: string | null;
}

const initialState: SearchState = {
	searchTerm: null
};

const searchSlice = createSlice({
	name: "searchPokemon",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
		}
	}
});

export const selectSearchPokemonName = (state:any) => state.searchPokemon.searchTerm;

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;