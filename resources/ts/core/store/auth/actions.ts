import { createAction } from "@reduxjs/toolkit";

export const updateAuthStatus = createAction<string>('auth.status');
