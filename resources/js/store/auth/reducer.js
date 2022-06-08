import actionTypes from './action-types';
import constants from "../../constants";

const initialState = {
    action: constants.auth.AUTH_LOGIN,
    locales: {},
    loginForm: {
        email: '',
        password: '',
    },
    registerForm: {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
    }
}

const updateFormField = (state, field, value) => {
    const imtState = { ...state };
    let form;
    if (state.action === constants.auth.AUTH_LOGIN) {
        form = imtState.loginForm;
    } else if (state.action === constants.auth.AUTH_REGISTER) {
        form = imtState.registerForm;
    }
    form[field] = value;

    return imtState;
}

const auth = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.UPDATE_FORM_FIELD:
            return updateFormField(state, action.field, action.value);

        case actionTypes.UPDATE_ACTION:
            return { ...state, action: action.value };

        case actionTypes.UPDATE_LOCALES:
            return { ...state, locales: action.locales };

        default:
            return { ...state };
    }
}

export default auth;
