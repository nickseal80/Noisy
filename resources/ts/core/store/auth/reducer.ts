import { createReducer } from "@reduxjs/toolkit";
import { updateAuthStatus } from "./actions";
import { AuthState } from "../../types/initialState.types";
import { AuthStatus } from "../../types/auth.types";

const initialState: AuthState = {
    status: AuthStatus.AUTH_STATUS_PENDING,
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateAuthStatus, (state, action) => {
            state.status = <AuthStatus>action.payload;
        });
});

export default authReducer;
