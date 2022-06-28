import styled from "styled-components";
import vars from "../global.vars";

const { card } = vars;

export const StdCard = styled.div`
    background-color: ${card.background};
    color: ${card.color};
    border: ${card.borderWidth}px solid ${card.borderColor};
    border-radius: ${card.borderRadius}px;
`;
