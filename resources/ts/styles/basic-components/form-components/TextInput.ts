import styled from "styled-components";
import vars from "../../global.vars";

interface IField {
    active: boolean,
}

const { component } = vars;

export const STextInput = styled.input<IField>`
    width: 100%;
    background-color: ${component.background};
    color: ${component.color};
    padding: ${component.padding};
    margin: 15px 0;
    border-radius: ${component.borderRadius}px;
    font-size: ${component.fontSize};
    border: 1px solid ${props => props.active ? component.activeBackgroundColor : component.background};
    transition: border-color .2s ease;

    ::placeholder {
        color: #727f94;
        transition: color .2s ease;
        opacity: 1;
    }

    :focus {
        ::placeholder {
            color: #3e4550;
        }
    }
`;

// Field = styled.input.attrs(() => ({ type: 'text' }))<IField>
