import styled from "styled-components";
import colors from "../../../../styles/global.colors.vars";

type StyledButtonProps = {
    width?: string;
}

export const Button = styled.button`
    height: 36px;
    background-color: ${colors.buttonBackground};
    color: ${colors.componentActive};
    font-size: 16px;
    border-radius: 8px;
    border: none;
    padding: 0 20px;
    cursor: pointer;
`;
