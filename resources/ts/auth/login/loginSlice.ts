import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
    email: string,
    password: string,
}

const initialState: LoginState = {
    email: '',
    password: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateEmail: (state, action:PayloadAction<string>) => {
            state.email = action.payload
        },

        updatePassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload
        },
    }
})

export const { updateEmail, updatePassword } = loginSlice.actions;

export default loginSlice.reducer;
