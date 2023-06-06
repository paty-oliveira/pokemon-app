import { configureStore} from "@reduxjs/toolkit";
import searchReducer from "@/store/features/searchPokemon/searchSlice";
export const index = configureStore({
	reducer: {
		searchPokemon: searchReducer
	}
});

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;
