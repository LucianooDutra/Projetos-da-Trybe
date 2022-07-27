import React from 'react';
import PropTypes from 'prop-types';
import '../css/Stile.css';

// Item 3 e 4
class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      showDeleteButton,
      onDeleteButtonClick,
    } = this.props;

    const btnDeleteCard = showDeleteButton ? (
      <button
        className="Card-delete"
        type="button"
        data-testid="delete-button"
        onClick={ () => {
          onDeleteButtonClick(cardName);
        } }
      >
        Excluir
      </button>
    ) : null;

    return (
      <div className="Card-container">
        <div className="Card-content">
          <p className="Card-name" data-testid="name-card">
            {cardName}
          </p>
          <div className="Card-image-container">
            <img
              className="Card-image"
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            />
            {/* Utilizei a renderização condicional pra mostrar a frase */}
            {cardTrunfo ? (
              <p className="Card-trunfo" data-testid="trunfo-card">
                Super Trunfo
              </p>
            ) : null}
          </div>
          <p className="Card-description" data-testid="description-card">
            {cardDescription}
          </p>
          <p className="Card-attr" data-testid="attr1-card">
            <span className="Card-attr-label">Atributo 1</span>
            <span className="Card-attr-value">{cardAttr1}</span>
          </p>
          <p className="Card-attr" data-testid="attr2-card">
            <span className="Card-attr-label">Atributo 2</span>
            <span className="Card-attr-value">{cardAttr2}</span>
          </p>
          <p className="Card-attr" data-testid="attr3-card">
            <span className="Card-attr-label">Atributo 3</span>
            <span className="Card-attr-value">{cardAttr3}</span>
          </p>
          <p className="Card-rare" data-testid="rare-card">
            <span className="Card-rare-label">Raridade</span>
            <span className="Card-rare-value">{cardRare}</span>
          </p>
        </div>
        <div>
          {/* retorna dentro da minha lista o botão de delete */}
          <li className="Card">
            {btnDeleteCard}
          </li>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  showDeleteButton: false,
  onDeleteButtonClick: () => {},
};

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  showDeleteButton: PropTypes.bool,
  onDeleteButtonClick: PropTypes.func,
};

export default Card;
