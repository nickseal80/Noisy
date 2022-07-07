import React from "react";
import { SCheckBox, Container, Label } from "./checkBox.styled";

interface ICheckBox {
    checked: boolean,
    toggle: () => void,
    label?: string,
}

const CheckBox: React.FC<ICheckBox> = ({ checked, toggle, label }) => {
    return (
        <Container onClick={() => { toggle() }}>
            <SCheckBox
                id={"checkbox"}
                checked={checked}
            />
            <Label htmlFor={"checkbox"}>
                {label}
            </Label>
        </Container>
    )
}

export default CheckBox;
