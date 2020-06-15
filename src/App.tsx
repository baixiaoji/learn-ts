import React from 'react';
import {AppContainer} from "./styles/styles";

import {Column} from "./Column";
import {Card} from "./Card";

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
    </AppContainer>
  );
}

export default App;
