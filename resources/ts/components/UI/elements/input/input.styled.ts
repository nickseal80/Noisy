import styled from "styled-components";
import colors from "../../../../styles/global.colors.vars";

type StyledInputProps = {
    active?: boolean;
}

export const Input = styled.input.attrs<StyledInputProps>(({ type: 'text' || 'number' || 'password' }))`
    width: 100%;
    height: 42px;
    padding: 0 20px;
    border-radius: 10px;
    background: ${colors.componentBackground};
    color: ${colors.componentText};
    border: 1px solid ${(props: StyledInputProps) => props.active ? colors.componentActive : colors.componentBackground};
    transition: border-color 0.2s;
`;
