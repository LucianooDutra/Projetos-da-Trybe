import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './pages/Rotas';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Rotas />
      </BrowserRouter>
    );
  }
}

export default App;
