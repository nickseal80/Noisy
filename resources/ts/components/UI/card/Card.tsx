/// <reference path="../../../interfaces/common.ts" />

import React from "react";
import * as Styled from "./card.styled";

interface ICard extends Interfaces.Common.Children {
    width: string,
    height: string,
    title?: string,
    centered?: boolean,
}

function Card(props: ICard) {
    return (
        <Styled.Card
            width={props.width}
            height={props.height}
            centered={props.centered}
        >
            {
                props.title &&
                <Styled.Title>
                    {props.title}
                </Styled.Title>
            }
            <Styled.Content>
                {props.children}
            </Styled.Content>
        </Styled.Card>
    )
}

export default Card;
