import styled from "styled-components";
import colors from "../../styles/global.colors.vars";
import vars from "../../styles/global.vars";

const { component } = vars;

export const SButton = styled.input.attrs(() => ({ type: "button" }))`
    background-color: ${colors.buttonBackground};
    color: ${colors.componentActive};
    height: 40px;
    line-height: 32px;
    border: none;
    border-radius: ${component.borderRadius}px;
    font-size: 16px;
    margin: 20px 0;
    cursor: pointer;
`;
