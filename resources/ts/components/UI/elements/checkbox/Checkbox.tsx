import React, { useState } from "react";
import * as Styled from "./checkbox.styled";

type CheckboxProps = {
    active: boolean,
    setActive: () => any,
}

function Checkbox(props: CheckboxProps) {
    const clickHandler = () => {
        props.setActive();
    }

    return (
        <Styled.Checkbox
            active={props.active}
            onClick={clickHandler}
        />
    )
}

export default Checkbox;
