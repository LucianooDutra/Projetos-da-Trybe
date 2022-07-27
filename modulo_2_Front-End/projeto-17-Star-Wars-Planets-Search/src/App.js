import React from 'react';
import './App.css';
import ContextProvider from './Context/ContextProvider';
import MainPage from './pages/MainPage';
// import Table from './Components/Table';

function App() {
  return (
    <ContextProvider>
      <MainPage />
    </ContextProvider>
  );
}

export default App;
