import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Container, ForgetPasswdLink, Form, FormField, Invite, InviteLink, Submit} from './StyledComponents';
import Field from "./Field";
import RegisterContainer from "./RegisterContainer";
import constants from "../../constants";

class Login extends Component {
    componentDidMount() {
        this.props.updateAction(constants.auth.AUTH_LOGIN);
        this.props.getLoginData();
    }

    renderForm = () => {
        if (Object.keys(this.props.locales).length > 0) {

            /**
             * @property { Object } locales
             * @property { string } locales.header
             * @property { Object } locales.fields
             * @property { Object } locales.errorMessages
             * @property { Object } locales.text
             */
            const { locales } = this.props;
            return (
                <Form>
                    <h3>{locales.header}</h3>

                    <Field
                        type={'text'}
                        name={'email'}
                        caption={locales.fields.email}
                        update={this.props.updateField}
                        value={this.props.email}
                    />

                    <Field
                        type={'password'}
                        name={'password'}
                        caption={locales.fields.password}
                        update={this.props.updateField}
                        value={this.props.password}
                    />

                    <FormField>
                        <ForgetPasswdLink to={'/'}>{locales.text.forgetPassword}</ForgetPasswdLink>
                    </FormField>

                    <Submit value={locales.fields.submitLogin}/>

                    <Invite>
                        {locales.text.notHaveAcc} <InviteLink to={'/register'}>{locales.text.login}</InviteLink>
                    </Invite>
                </Form>
            );
        }
    }

    render() {
        return (
            <Container>
                {this.renderForm()}
            </Container>
        );
    }
}

export default Login;
