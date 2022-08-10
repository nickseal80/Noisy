import React from "react";
import Card from "../components/UI/card/Card";
import Input from "../components/UI/elements/input/Input";

const Login: React.FC = () => {
    return (
        <div>
            <Card
                width="300px"
                height="400px"
                title="Авторизация"
                centered={true}
            >
                <div>
                    <Input type="text" />
                </div>
            </Card>
        </div>
    )
}

export default Login;
