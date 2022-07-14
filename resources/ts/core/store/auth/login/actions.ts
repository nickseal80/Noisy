import { createAction } from "@reduxjs/toolkit";

export const updateEmail = createAction<string>('auth.login.updateEmail');

export const updatePassword = createAction<string>('auth.login.updatePassword');

export const rememberMe = createAction<boolean>('auth.login.rememberMe');
