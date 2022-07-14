import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import loginReducer from "./auth/login/reducer";
import registerReducer from "./auth/register/reducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        login: loginReducer,
        register: registerReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


