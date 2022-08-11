import React, { useState } from "react";
import * as Styled from "./input.styled";

type InputProps = {
    type: string,
    placeholder?: string,
    value?: string,
    onChangeHandler?: (text: string) => any,
}

function Input(props: InputProps) {
    const [active, setActive] = useState(false);

    const changeHandler = (evt) => {
        props.onChangeHandler(evt.target.value);
    }

    return (
        <Styled.Input
            type={props.type}
            value={props.value}
            active={active}
            placeholder={props.placeholder ? props.placeholder : ''}
            onChange={changeHandler}
            onFocus={() => {
                setActive(true)
            }}
            onBlur={() => {
                setActive(false)
            }}
        />
    )
}

export default Input;
