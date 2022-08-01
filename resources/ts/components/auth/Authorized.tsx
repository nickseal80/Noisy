import React from "react";
import { AuthProps } from "./RequireAuth";
import { useAppSelector } from "../../hooks/store";
import { UserState } from "../../store/user/userSlice";
import { Navigate } from "react-router-dom";

function Authorized(props: AuthProps) {
    const user = useAppSelector<UserState>((state) => state.user);

    if (user.id) {
        return <Navigate to="/" replace />
    }

    return (
        props.children
    )
}

export default Authorized;
