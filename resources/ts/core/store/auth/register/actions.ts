import { createAction } from "@reduxjs/toolkit";
import { Validation } from "../../../types/validation.types";

export const updateName = createAction<string>('auth.register.updateName');

export const updateEmail = createAction<string>('auth.register.updateEmail');

export const updatePassword = createAction<string>('auth.register.updatePassword');

export const updateConfirmPassword = createAction<string>('auth.register.updateConfirmPassword');

export const updateErrors = createAction<Validation.Error>('auth.login.updateErrors');
