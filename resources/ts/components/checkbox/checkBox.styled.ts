import styled from "styled-components";
import colors from "../../styles/global.colors.vars";

interface ICheckBox {
    checked: boolean,
}

export const SNativeCheckbox = styled.input.attrs(() => ({ type: 'checkbox' }))`
    position: absolute;
    top: -100px;
    left: -100px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    border-radius: 9px;
    cursor: pointer;
    padding: 8px;
    margin: 10px 0;
    transition: background-color .2s ease;

    :hover {
        background-color: #3a404d;
    }
`;

export const SCheckBox = styled.div<ICheckBox>`
    width: 32px;
    height: 32px;
    margin-right: 10px;
    background-color: ${colors.cardBackground};
    border: 2px solid ${colors.cardBorder};
    border-radius: 7px;
    color: #f7f7ff;
    transition: opacity, background-color .2s ease;

    :after {
        content: '\\2714';
        font-size: 20px;
        padding: 7px;
        opacity: 0;
    }

    ${props => props.checked && `
        background-color: ${colors.componentActive};

        :after {
            opacity: 1
        }
    `}
`;

export const Label = styled.label`
    line-height: 30px;
    cursor: pointer;
`;
