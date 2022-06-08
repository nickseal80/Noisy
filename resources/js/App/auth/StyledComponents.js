import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto';
    background: linear-gradient(217deg, rgba(255, 0, 0, .8), rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, rgba(0, 255, 0, .8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, .8), rgba(0, 0, 255, 0) 70.71%);
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: auto;
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 2px 2px 14px 0 #6c6c6c;
    opacity: 0.8;
    padding: 0 20px 20px 20px;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin-bottom: 20px;
`;

export const TextInput = styled.input`
    height: 32px;
    border: 1px solid #e0dede;
    border-radius: 3px;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 700;
`;

export const Submit = styled.input.attrs({ type: 'button' })`
    display: inline-block;
    width: 100%;
    margin: 0 0 20px;
    height: 32px;
    background-color: #32a842;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 1px 1px 4px 0 #7b7b7b;
`;

export const StdLink = styled(Link)`
    text-decoration: none;
    text-transform: none;
`;

export const ForgetPasswdLink = styled(StdLink)`
    color: #8d8d8d;
`;

export const Invite = styled.div`
    font-size: 14px;
`;

export const InviteLink = styled(StdLink)`
    font-weight: 700;
    color: #000;
`;
