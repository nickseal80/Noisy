import React, { FormEvent, SyntheticEvent } from "react";
import { Background, Card, CardTitle } from "./login.styles";
import TextInput from "../../components/TextInput";
import CheckBox from "../../components/CheckBox";
import { useSelector, useDispatch } from "react-redux";
import { updateEmail, updatePassword, rememberMeToggle } from "./loginSlice";
import { RootState } from "../../store";

const Login: React.FC = () => {
    const {email, password, rememberMe} = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    const emailHandle = (evt: FormEvent<HTMLInputElement>) => {
        const email = (evt.target as HTMLInputElement).value;
        dispatch(updateEmail(email));
    }

    const passwordHandle = (evt: FormEvent<HTMLInputElement>) => {
        const pass = (evt.target as HTMLInputElement).value;
        dispatch(updatePassword(pass));
    }

    const rmToggle = () => {
        dispatch(rememberMeToggle());
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

                <CheckBox
                    checked={rememberMe}
                    toggle={rmToggle}
                    label={"Автоматический вход"}
                />
            </Card>
        </Background>
    )
}

export default Login;
