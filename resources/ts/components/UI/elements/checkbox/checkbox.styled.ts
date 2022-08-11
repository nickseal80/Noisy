import styled from "styled-components";
import colors from "../../../../styles/global.colors.vars";

type StyledCheckboxProps = {
    active: boolean,
}

//language=CSS
const activeMixin = `
    :before {
        content: '\\2714';
        color: ${colors.cardTitle};
        font-size: 20px;
    }
`;

export const Checkbox = styled.div<StyledCheckboxProps>`
    width: 30px;
    height: 30px;
    padding: 0 5px;
    background-color: ${props => props.active ? colors.componentActive : colors.cardBackground};
    border: 2px solid ${props => props.active ? colors.componentActive : colors.cardBorder};
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
    ${props => {
        if (props.active) {
            return activeMixin;
        }
    }}
`;
