import { configureStore} from "@reduxjs/toolkit";
import searchReducer from "@/store/features/searchPokemon/searchSlice";
import {apiSlice} from "@/store/features/api/apiSlice";

export const index = configureStore({
	reducer: {
		searchPokemon: searchReducer,
		[apiSlice.reducerPath]: apiSlice.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;
