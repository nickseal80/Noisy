import React from "react";
import * as Styled from "./button.styled";

type ButtonProps = {
    name: string
}

function Button(props: ButtonProps) {
    return (
        <Styled.Button>
            {props.name}
        </Styled.Button>
    )
}

export default Button;
