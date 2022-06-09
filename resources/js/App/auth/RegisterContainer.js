import Register from "./Register";
import {connect} from "react-redux";
import { updateField, updateAction, getRegisterData } from "../../store/auth/actions";

const mapStateToProps = state => ({
    locales: state.auth.locales,
    config: state.auth.config,
    form: state.auth.registerForm,
});

const mapDispatchToProps = {
    updateAction,
    updateField,
    getRegisterData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
