import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Models } from "../../models/User.model";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/auth'
    }),
    endpoints: build => ({
        getUserData: build.query<Models.UserData, string>({
            query: (accessToken: string) => ({
                url: '/user-data',
                params: {
                    accessToken,
                    login: 1,
                }
            }),
        }),
    }),
});

export const { useGetUserDataQuery } = authApi;
