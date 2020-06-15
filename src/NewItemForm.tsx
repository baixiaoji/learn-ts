import React, {useState} from "react";
import {NewItemFormContainer, NewItemInput, NewItemButton} from './styles/styles';
import {useFocus} from "./hooks/useFocus";

interface NewItemFormProps {
    onAdd(text: string): void;
}

export const NewItemForm = (props: NewItemFormProps) => {

    const [text, setText] = useState('');
    const {onAdd} = props;
    const inputRef = useFocus();

    return (
        <NewItemFormContainer>
            <NewItemInput
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )
};
