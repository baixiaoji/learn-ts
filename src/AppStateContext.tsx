import React, {createContext, Dispatch, PropsWithChildren, useContext, useReducer} from "react";
import {nanoid} from "nanoid";
import {findItemIndexById} from "./utils/findItemIndexById";
import { moveItem } from "./utils/moveItem";
import {DragItem} from "./DragItem";

interface Task {
    id: string;
    text: string;
}
interface List {
    id: string;
    text: string;
    tasks: Task[];
}
export interface AppState {
    lists: List[]
    draggedItem?: DragItem;
}
const appData: AppState = {
    lists: [
        {
            id: '0',
            text: 'TO DO',
            tasks: [
                {id: 'c0', text: 'App data generate'},
            ]
        },
        {
            id: '1',
            text: 'In Progress',
            tasks: [
                {id: 'c2', text: 'Learn TS & React'},
            ]
        },
        {
            id: '2',
            text: 'Done',
            tasks: [
                {id: 'c3', text: 'start using TS'},
            ]
        },
    ]
}

type Action = | {
    type: 'ADD_LIST',
    payload: string;
} | {
    type: "ADD_TASK",
    payload: {
        text: string;
        listId: string;
    }
} | {
    type: 'MOVE_LIST',
    payload: {
        dragIndex: number;
        hoverIndex: number;
    },
} | {
    type: "SET_DRAGGED_ITEM",
    payload: DragItem | undefined;
}

const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "ADD_LIST": {
            return {
                ...state,
                lists: [
                    ...state.lists,
                    {id: nanoid(), text: action.payload, tasks: []}
                ],
            }
        }
        case "ADD_TASK": {
            const targetIndex = findItemIndexById(
                state.lists,
                action.payload.listId
            );

            state.lists[targetIndex].tasks.push({
                id: nanoid(),
                text: action.payload.text
            })
            return {
                ...state,
            }
        }
        case "MOVE_LIST": {
            const { dragIndex, hoverIndex } = action.payload;
            state.lists = moveItem(state.lists, dragIndex, hoverIndex);

            return {...state};
        }
        case "SET_DRAGGED_ITEM": {
            return {
                ...state,
                draggedItem: action.payload
            }
        }
        default: {
            return state;
        }
    }

}
interface AppStateContextProps {
    state: AppState;
    dispatch: Dispatch<Action>;
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const useAppState = () => {
    return useContext(AppStateContext);
}
export const AppStateProvider = ({children}: PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(appStateReducer, appData);
    return <AppStateContext.Provider value={ {state, dispatch } }>
        {children}
    </AppStateContext.Provider>;
}
