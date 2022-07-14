import { AuthStatus } from "./auth.types";

export type LoginState = {
    email: string,
    password: string,
    rememberMe: boolean,
}

export type RegisterState = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export type AuthState = {
    status: AuthStatus,
}
