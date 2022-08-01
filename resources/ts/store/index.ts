import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";
import userReducer from "./user/userSlice";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        user: userReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


