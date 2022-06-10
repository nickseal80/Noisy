import Register from "./Register";
import {connect} from "react-redux";
import { updateField, updateAction, getRegisterData } from "../../store/auth/actions";

const mapStateToProps = state => {
    const locales = state.auth.locales;
    const config = state.auth.config;
    const form = state.auth.registerForm;

    return {
        locales,
        config,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword,
        nickname: form.name,
    }
};

const mapDispatchToProps = {
    updateAction,
    updateField,
    getRegisterData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
