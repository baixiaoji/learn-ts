import React from 'react';
import {AppContainer} from "./styles/styles";

import {Column} from "./Column";
import {AddNewItem} from './AddNewItem'
import {useAppState} from "./AppStateContext";
import {CustomDragLayer} from "./CustomDragLayer";

function App() {
    const {state, dispatch} = useAppState();

    return (
        <AppContainer>
            <CustomDragLayer />
            {state.lists.map((list,i) => (
                <Column text={list.text} key={list.id} index={i} id={list.id} />
            ))}
            <AddNewItem toggleButtonText='+ Add another list'
                        onAdd={text => dispatch({type: 'ADD_LIST', payload: text})}
            />
        </AppContainer>
    );
}

export default App;
