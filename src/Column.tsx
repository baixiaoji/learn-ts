import React, {PropsWithChildren} from "react";
import {ColumnContainer, ColumnTitle} from "./styles/styles";

interface ColumnProps {
    text: string;
}
export const Column = (props: PropsWithChildren<ColumnProps>) => {
    const {text, children} = props;
    return (
        <ColumnContainer>
            <ColumnTitle>{ text }</ColumnTitle>
            {children}
        </ColumnContainer>
    )
}

