import { createAction } from "@reduxjs/toolkit";

export const updateName = createAction<string>('auth.register.updateName');

export const updateEmail = createAction<string>('auth.register.updateEmail');

export const updatePassword = createAction<string>('auth.register.updatePassword');

export const updateConfirmPassword = createAction<string>('auth.register.updateConfirmPassword');
