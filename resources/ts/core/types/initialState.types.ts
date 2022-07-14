import { AuthStatus } from "./auth.types";
import { Validation } from "./validation.types";

export type LoginState = {
    email: string,
    password: string,
    rememberMe: boolean,
    errors: Validation.Errors,
}

export type RegisterState = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    errors: Validation.Errors,
}

export type AuthState = {
    status: AuthStatus,
}
