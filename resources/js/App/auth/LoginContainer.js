import Login from "./Login";
import { connect } from "react-redux";
import { updateField, getLoginData, updateAction } from "../../store/auth/actions";

const mapStateToProps = state => {
    const locales = state.auth.locales;
    const form = state.auth.loginForm;
    return {
        locales,
        email: form.email,
        password: form.password,
    }
}

const mapDispatchToProps = {
    updateAction,
    updateField,
    getLoginData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
