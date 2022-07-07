import React, { useState } from "react";
import { STextInput } from "./textInput.styled";

interface ITextInput {
    type: string,
    placeholder?: string,
    onChange: (any) => any,
    value: string,
}

const TextInput: React.FC<ITextInput> = ({ type, placeholder, value, onChange }) => {
    const [active, setActive] = useState(false);

    return (
        <STextInput
            type={type}
            placeholder={placeholder}
            active={active}
            value={value}
            onChange={onChange}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
        />
    )
}

export default TextInput;
