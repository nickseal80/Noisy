import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
    email: string,
    password: string,
    rememberMe: boolean,
}

const initialState: LoginState = {
    email: '',
    password: '',
    rememberMe: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateEmail: (state, action:PayloadAction<string>) => {
            state.email = action.payload;
        },

        updatePassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        },

        rememberMeToggle: (state) => {
            state.rememberMe = !state.rememberMe;
        }
    }
})

export const { updateEmail, updatePassword, rememberMeToggle } = loginSlice.actions;

export default loginSlice.reducer;
