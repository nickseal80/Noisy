import Login from "./Login";
import { connect } from "react-redux";
import { updateField, getLoginData, updateAction } from "../../store/auth/actions";

const mapStateToProps = state => ({
    locales: state.auth.locales,
    form: state.auth.loginForm,
});

const mapDispatchToProps = {
    updateAction,
    updateField,
    getLoginData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
