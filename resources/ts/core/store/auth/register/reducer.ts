import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";
import { RegisterState } from "../../../types/initialState.types";
import { useError } from "../../../hooks/validation.hooks";
import Error = Validation.Error;
import { Validation } from "../../../types/validation.types";

const initialState: RegisterState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {},
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
        })
        .addCase(actions.updateErrors, (state, action) => {
            state.errors = useError(state, <Error>action.payload);
        });
});

export default registerReducer;
