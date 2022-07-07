import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
    email: string,
    password: string,
}

const initialState: ProfileState = {
    email: '',
    password: '',
}

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getUserData: (state) => {
            //
        }
    }
})
