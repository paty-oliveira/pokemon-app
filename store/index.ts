import { configureStore} from "@reduxjs/toolkit";

export const index = configureStore({
	reducer: {}
});

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;
