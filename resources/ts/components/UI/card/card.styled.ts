import styled from "styled-components";
import colors from "../../../styles/global.colors.vars";

type StyledCard = {
    width: string,
    height: string,
    centered?: boolean,
}

type StyledCardContent = {
    padding?: string,
}

const centeredMixin = `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export const Card = styled.div<StyledCard>`
    background-color: ${colors.cardBackground};
    color: ${colors.cardText};
    border: 2px solid ${colors.cardBorder};
    border-radius: 15px;
    width: ${props => props.width};
    height: ${props => props.height};
    ${props => {
        if (props.centered) {
            return centeredMixin;
        }
    }}
`;

export const Title = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: ${colors.cardTitle};
`;

export const Content = styled.div<StyledCardContent>`
    padding: ${props => props.padding ? props.padding : '20px'};
`;
