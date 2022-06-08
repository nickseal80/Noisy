import React, {Component} from 'react';
import {Container, ForgetPasswdLink, Form, FormField, Invite, InviteLink, Link, Submit} from './StyledComponents';
import Field from "./Field";

class Login extends Component {
    componentDidMount() {
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
                    />

                    <Field
                        type={'password'}
                        name={'password'}
                        caption={locales.fields.password}
                    />

                    <FormField>
                        <ForgetPasswdLink href={'#'}>{locales.text.forgetPassword}</ForgetPasswdLink>
                    </FormField>

                    <Submit value={locales.fields.submitLogin}/>

                    <Invite>
                        {locales.text.notHaveAcc} <InviteLink href={'#'}>{locales.text.login}</InviteLink>
                    </Invite>
                </Form>
            );
        }
    }

    render() {
        return (
            <Container>
                {
                    this.renderForm()
                }
            </Container>
        );
    }
}

export default Login;
