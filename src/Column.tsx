import React, {PropsWithChildren} from "react";
import {ColumnContainer, ColumnTitle} from "./styles/styles";
import { AddNewItem } from "./AddNewItem";

interface ColumnProps {
    text: string;
}
export const Column = (props: PropsWithChildren<ColumnProps>) => {
    const {text, children} = props;
    return (
        <ColumnContainer>
            <ColumnTitle>{ text }</ColumnTitle>
            {children}
            <AddNewItem toggleButtonText='+ Add another task' onAdd={console.log} dark />
        </ColumnContainer>
    )
}

