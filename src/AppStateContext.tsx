import React, {createContext, PropsWithChildren} from "react";

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

interface AppStateContextProps {
    state: AppState;
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({children}: PropsWithChildren<{}>) => {
    return <AppStateContext.Provider value={ {state: appData} }>
        {children}
    </AppStateContext.Provider>;
}
