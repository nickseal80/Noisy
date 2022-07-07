import styled from "styled-components";
import { StdBkg } from "../../styles/basic-components/Background";
import { StdCard } from "../../styles/basic-components/Card";

export const Background = styled(StdBkg)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled(StdCard)`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;
    padding: 20px;
`;

export const CardTitle = styled.div`
    width: 100%;
    height: 40px;
    text-align: center;
`;
