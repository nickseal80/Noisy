import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import route from "ziggy-js";

export const fetchUserDataByAccessToken = createAsyncThunk(
    'profile/fetchByAccessToken',
    async () => {
        const { data } = await axios.get(route('api.get.user-data'));
        return data;
    }
)
