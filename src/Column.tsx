import React, {useRef} from "react";
import {ColumnContainer, ColumnTitle} from "./styles/styles";
import { AddNewItem } from "./AddNewItem";
import {useAppState} from "./AppStateContext";
import {Card} from "./Card";
import {useItemDrag} from "./hooks/useItemDrag";
import {useDrop} from "react-dnd";
import {DragItem} from "./DragItem";
import {isHidden} from "./utils/isHidden";

interface ColumnProps {
    text: string;
    index: number;
    id: string;
    isPreview?: boolean;
}
export const Column = (props: ColumnProps) => {
    const {text, index, id, isPreview} = props;
    const { state, dispatch } = useAppState();

    const ref = useRef<HTMLDivElement>(null)

    const  { drag } = useItemDrag({
        type: 'COLUMN', id, text, index
    })
    const [, drop] = useDrop({
        accept: 'COLUMN',
        hover(item: DragItem) {
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return
            }

            dispatch({type: "MOVE_LIST", payload: {dragIndex, hoverIndex}});

            item.index = hoverIndex;
        }
    })
    drag(drop(ref));


    return (
        <ColumnContainer
            ref={ref}
            isPreview={isPreview}
            isHidden={isHidden(isPreview, state.draggedItem, 'COLUMN', id)}
        >
            <ColumnTitle>{ text }</ColumnTitle>
            {state.lists[index].tasks.map(task => (
                <Card text={task.text} key={task.id}/>
            ))}
            <AddNewItem toggleButtonText='+ Add another task'
                        onAdd={text => dispatch({
                            type: 'ADD_TASK',
                            payload: {text, listId: id}
                        })}
                        dark
            />
        </ColumnContainer>
    )
}

