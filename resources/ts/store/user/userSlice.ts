import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Models } from "../../models/User.model";

export interface UserState {
    id: number,
    name: string,
    email: string,
    isActive: boolean,
    createdAt: string,
    accessToken: string,
}

const initialState: UserState = {
    id: null,
    name: '',
    email: '',
    isActive: false,
    createdAt: '',
    accessToken: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserData: (state, action: PayloadAction<Models.UserData>) => {
            const data = action.payload;
            state.id = data.user.id;
            state.name = data.user.name;
            state.email = data.user.email;
            state.isActive = data.user.email_verified_at !== null;
            state.createdAt = data.user.created_at;
            state.accessToken = data.accessToken;
        },
    }
});

export const { updateUserData } = userSlice.actions;

export default userSlice.reducer;
