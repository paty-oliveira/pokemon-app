import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit";

type SearchState = {
	searchTerm: string;
}

const initialState: SearchState = {
	searchTerm: ""
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

export const selectSearchPokemonName = (state:any) => state.searchTerm;

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;