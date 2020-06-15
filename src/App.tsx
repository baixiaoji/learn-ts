import React from 'react';
import {AppContainer} from "./styles/styles";

import {Column} from "./Column";
import {Card} from "./Card";
import {AddNewItem} from './AddNewItem'

function App() {
  return (
    <AppContainer>
        <Column text='To Do'>
            <Card text='Other Components' />
        </Column>
        <Column text='In Progress'>
            <Card text='App Components' />
        </Column>
        <Column text='Done'>
            <Card text='Remove Clutter' />
        </Column>
        <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
