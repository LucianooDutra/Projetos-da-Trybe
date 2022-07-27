import React from 'react';
import General from './components/General';

class App extends React.Component {
  state = {
    cards: [],
  }

  // Item 6
  // Função que adiciona no meu estado cards minha carta nova
  addCard = (card) => {
    const { cards } = this.state;
    this.setState(
      {
        cards: [...cards, card],
      },
    );
  };

  // Item 9
  // Função que ao ser clicado o botal de excluir ele o chama
  deleteCard = (cardName) => {
    const { cards } = this.state;
    this.setState(
      {
        cards: cards.filter((card) => card.cardName !== cardName),
      },
    );
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="divGeral">
        <h1 className="tituloH1">Tryunfo!</h1>
        <General
          cards={ cards }
          addCard={ this.addCard }
          deleteCard={ this.deleteCard }
        />
      </div>
    );
  }
}

export default App;
