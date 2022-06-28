import React from "react";
import { Background, Card, CardTitle } from "./login.styles";
import TextInput from "../../components/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { updateEmail, updatePassword } from "./loginSlice";
import { RootState } from "../../store";

const Login: React.FC = () => {
    const {email, password} = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    const emailHandle = (evt) => {
        dispatch(updateEmail(evt.target.value));
    }

    const passwordHandle = (evt) => {
        dispatch(updatePassword(evt.target.value));
    }

    return (
        <Background>
            <Card>
                <CardTitle>Войти</CardTitle>

                <TextInput
                    type={"text"}
                    placeholder={"Email"}
                    onChange={emailHandle}
                    value={email}
                />

                <TextInput
                    type={"password"}
                    placeholder={"Пароль"}
                    onChange={passwordHandle}
                    value={password}
                />

                {/*<input*/}
                {/*    type={"text"}*/}
                {/*    id={"email"}*/}
                {/*    onChange={emailHandle}*/}
                {/*    value={email}*/}
                {/*    style={{height: '30px'}}*/}
                {/*/>*/}

                {/*<input*/}
                {/*    type={"password"}*/}
                {/*    id={"password"}*/}
                {/*    onChange={passwordHandle}*/}
                {/*    value={password}*/}
                {/*    style={{height: '30px'}}*/}
                {/*/>*/}
            </Card>
        </Background>
    )
}

export default Login;
