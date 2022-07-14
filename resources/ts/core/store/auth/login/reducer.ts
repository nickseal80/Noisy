import { createReducer } from "@reduxjs/toolkit";
import { LoginState } from "../../../types/initialState.types";
import * as actions from "./actions";
import { Validation } from "../../../types/validation.types";
import Error = Validation.Error;
import { useError } from "../../../hooks/validation.hooks";

const initialState: LoginState = {
    email: '',
    password: '',
    rememberMe: false,
    errors: {},
};

const loginReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.updateEmail, (state, action) => {
            state.email = <string>action.payload;
        })
        .addCase(actions.updatePassword, (state, action) => {
            state.password = <string>action.payload;
        })
        .addCase(actions.rememberMe, (state, action) => {
            state.rememberMe = <boolean>action.payload;
        })
        .addCase(actions.updateErrors, (state, action) => {
            state.errors = useError(state, <Error>action.payload);
        });
});

export default loginReducer;
