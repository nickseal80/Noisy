import Register from "./Register";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    state: state,
});

const mapDispatchToProps = {
    //
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
