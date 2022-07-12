import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import { fetchUserProfile, updateStatus, UserStatus } from "./profile/profileSlice";
import { useAppDispatch, useAppSelector, RootState } from "./store";
import Main from "./workspace/Main";


const App: React.FC = () => {
    const { status } = useAppSelector((state: RootState) => state.profile);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            dispatch(updateStatus(UserStatus.STATUS_GUEST));
            return;
        }

        dispatch(fetchUserProfile(accessToken));
    }, []);

    return (
        <>
            <GlobalStyles />
            <Routes>
                {/*<Route path="/" element={<Main />} />*/}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {
                    status === UserStatus.STATUS_GUEST &&
                    <Route path="/" element={<Navigate to="/login" />} />
                }
            </Routes>
        </>
    )
}

export default App;
