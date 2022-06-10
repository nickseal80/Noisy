import React, { Component } from 'react';
import { Container, Form, Invite, InviteLink, Submit } from "./StyledComponents";
import constants from "../../constants";
import Field from "./Field";

class Register extends Component {
    componentDidMount() {
        this.props.updateAction(constants.auth.AUTH_REGISTER);
        this.props.getRegisterData();
    }

    renderForm = () => {
        if (Object.keys(this.props.locales).length > 0) {
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

                    <Field
                        type={'password'}
                        name={'confirmPassword'}
                        caption={locales.fields.confirmPassword}
                        update={this.props.updateField}
                        value={this.props.confirmPassword}
                    />

                    <Field
                        type={'nickname'}
                        name={'name'}
                        caption={locales.fields.chatNickname}
                        update={this.props.updateField}
                        value={this.props.nickname}
                    />

                    <Submit value={locales.fields.submitRegister}/>

                    <Invite>
                        {locales.text.haveAcc} <InviteLink to={'/login'}>{locales.text.register}</InviteLink>
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

export default Register;
