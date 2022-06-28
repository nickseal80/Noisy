import React from "react";
import GlobalStyles from "./styles/global";
import Login from "./auth/login/Login";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <Login />
        </>
    )
}

export default App;
