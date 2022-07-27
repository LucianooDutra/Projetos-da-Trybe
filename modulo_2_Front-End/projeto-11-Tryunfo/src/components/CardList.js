import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';
import '../css/Stile.css';

// arquivo feito pra salvar toda minha lista de cards que fiz
class cardList extends React.Component {
  render() {
    const { cards, onDeleteButtonClick } = this.props;

    // Função que retorna os dados pra o Card, se o estado do meu cards, que foi onde criei pra salvar as cartas no estado, for maior que zero
    return cards.length > 0 ? (
      <ul className="cardList">
        {cards.map((card) => (
          <Card
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
            key={ card.cardName }
            onDeleteButtonClick={ onDeleteButtonClick }
            showDeleteButton
            listContent
          />
        ))}
      </ul>
    ) : (
      <p className="emptyList">Nenhuma carta encontrada.</p>
    );
  }
}

cardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.exact({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default cardList;
