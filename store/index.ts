import {configureStore, Store, combineReducers, PreloadedState} from "@reduxjs/toolkit";
import searchReducer from "@/store/features/searchPokemon/searchSlice";
import {apiSlice} from "@/store/features/api/apiSlice";
import { setupListeners } from '@reduxjs/toolkit/query'


const rootReducer = combineReducers({
	searchPokemon: searchReducer,
	[apiSlice.reducerPath]: apiSlice.reducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
	configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
	})

export const store = setupStore();

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
