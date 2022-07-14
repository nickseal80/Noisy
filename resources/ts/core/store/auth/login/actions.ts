import { createAction } from "@reduxjs/toolkit";
import { Validation } from "../../../types/validation.types";

export const updateEmail = createAction<string>('auth.login.updateEmail');

export const updatePassword = createAction<string>('auth.login.updatePassword');

export const rememberMe = createAction<boolean>('auth.login.rememberMe');

export const updateErrors = createAction<Validation.Error>('auth.login.updateErrors');
