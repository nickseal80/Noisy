import React from "react";
import { SButton } from "./button.styled";

interface IButton {
    caption: string,
    handler: () => void;
}

const Button: React.FC<IButton> = ({ caption, handler }) => {
    const handle = () => {
        handler();
    }

    return (
        <SButton
            type={"button"}
            onClick={handle}
            value={caption}
        />
    )
}

export default Button;
