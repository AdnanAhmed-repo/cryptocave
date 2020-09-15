import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Search from '../Search';
import Content from '../Shared/Content';

function App() {
  return (
    <AppLayout>
      <AppProvider>
      <img src={require('../cave.png')} width="290" height="90" />
      <AppBar/>
     <h1>Welcome to CryptoCave!</h1>
     <Content>
     <Search/>
     </Content>
     
     </AppProvider>
    </AppLayout>
  );
}

export default App;
