/// <reference path="../../interfaces/common.ts" />

import React, { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Loader from "../UI/loader/Loader";
import { useAppDispatch } from "../../hooks/store";
import { updateUserData } from "../../store/user/userSlice";

function RequireAuth(props: Interfaces.Common.Children) {
    const { isLoading, isError, data } = useAuth();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) {
            dispatch(updateUserData(data));
        }
    })

    if (isError) {
        return <Navigate to="/auth/login" replace />
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        props.children
    )
}

export default RequireAuth;
