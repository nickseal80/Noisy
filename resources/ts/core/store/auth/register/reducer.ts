import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";
import { RegisterState } from "../../../types/initialState.types";

const initialState: RegisterState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const registerReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.updateName, (state, action) => {
            state.name = <string>action.payload;
        })
        .addCase(actions.updateEmail, (state, action) => {
            state.email = <string>action.payload;
        })
        .addCase(actions.updatePassword, (state, action) => {
            state.password = <string>action.payload;
        })
        .addCase(actions.updateConfirmPassword, (state, action) => {
            state.confirmPassword = <string>action.payload;
        });
});

export default registerReducer;
