import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import RequireAuth from "./components/auth/RequireAuth";
import Authorized from "./components/auth/Authorized";

const App: React.FC = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <RequireAuth>
                        <Chat />
                    </RequireAuth>
                } />
                <Route path="auth">
                    <Route path="login" element={
                        <Authorized>
                            <Login />
                        </Authorized>
                    } />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
            <GlobalStyles />

        </>
    )
}

export default App;
