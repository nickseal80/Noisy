import { Validation } from "../types/validation.types";

export const useError = (state, error: Validation.Error) => {
    const errors = { ...state.errors };
    const messages = errors[error.fieldName];
    messages.push(error.message);

    return errors;
}
