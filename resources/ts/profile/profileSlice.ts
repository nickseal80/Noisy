import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import route from "ziggy";
import axios from "axios";

export enum UserStatus {
    STATUS_PENDING = 'pending',
    STATUS_REGISTERED = 'registered',
    STATUS_GUEST = 'guest',
}

export interface ProfileState {
    id: number,
    email: string,
    name: string,
    createdAt: string,
    activated: boolean,
    status: UserStatus,
}

const initialState: ProfileState = {
    id: null,
    email: '',
    name: '',
    createdAt: '',
    activated: false,
    status: UserStatus.STATUS_PENDING,
}

export const fetchUserProfile = createAsyncThunk(
    'profile/fetchUserData',
    async (accessToken: string) => {
        const { data } = await axios.get(route('auth.user', { accessToken }));
        return data;
    }
)

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateStatus(state, action: PayloadAction<UserStatus>) {
            state.status = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
            const { accessToken, user } = action.payload;
            localStorage.setItem('accessToken', accessToken)
            state.status = UserStatus.STATUS_REGISTERED;
            state.id = user.id;
            state.email = user.email;
            state.name = user.name;
            state.createdAt = user.created_at;
            state.activated = user.email_verified_at !== null;
        });

        builder.addCase(fetchUserProfile.rejected, (state, action) => {
            state.status = UserStatus.STATUS_GUEST;
        })
    }
});

export const { updateStatus } = profileSlice.actions;
export default profileSlice.reducer;
