import { createReducer } from "@reduxjs/toolkit";
import { LoginState } from "../../../types/initialState.types";
import { rememberMe, updateEmail, updatePassword } from "./actions";

const initialState: LoginState = {
    email: '',
    password: '',
    rememberMe: false,
};

const loginReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateEmail, (state, action) => {
            state.email = <string>action.payload;
        })
        .addCase(updatePassword, (state, action) => {
            state.password = <string>action.payload;
        })
        .addCase(rememberMe, (state, action) => {
            state.rememberMe = <boolean>action.payload;
        })
});

export default loginReducer;
