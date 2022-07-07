import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";

const App: React.FC = () => {

    useEffect(() => {

    }, []);

    return (
        <>
            <GlobalStyles/>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

                {/* TODO: при условии, что юзер - гест */}
                <Route path="/" element={<Navigate to="/login"/>}/>
            </Routes>
        </>
    )
}

export default App;
