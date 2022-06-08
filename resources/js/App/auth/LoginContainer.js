import Login from "./Login";
import { connect } from "react-redux";
import { updateField, getLoginData } from "../../store/auth/actions";

const mapStateToProps = state => ({
    locales: state.auth.locales,
    form: state.auth.loginForm,
});

const mapDispatchToProps = {
    updateField,
    getLoginData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
