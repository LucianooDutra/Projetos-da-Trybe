import React from 'react';
import PropTypes from 'prop-types';
import '../css/Stile.css';

// Item 1 e 2
class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        <div>
          <label htmlFor="field-name">
            Nome :
            <input
              type="text"
              name="cardName"
              className="Form-cardName"
              id="field-name"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="field-description">
            Descrição :
            <textarea
              name="cardDescription"
              className="Form-cardDescription"
              id="field-description"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="field-attr1">
            Attr01 :
            <input
              type="number"
              name="cardAttr1"
              className="Form-cardAttr1"
              id="field-attr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="field-attr2">
            Attr02 :
            <input
              type="number"
              name="cardAttr2"
              className="Form-cardAttr2"
              id="field-attr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="field-attr3">
            Attr03 :
            <input
              type="number"
              name="cardAttr3"
              className="Form-cardAttr3"
              id="field-attr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="field-image">
            Imagem :
            <input
              type="text"
              name="cardImage"
              className="Form-cardImage"
              id="field-image"
              fieldContainer
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="field-rare">
            Raridade :
            <select
              name="cardRare"
              className="Form-cardRare"
              id="field-rare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito Raro</option>
            </select>
          </label>
        </div>
        <div>
          {/* Item 7 - Utilizei a renderização condicional pra mostrar a frase */}
          {hasTrunfo ? (
            <p> Você já tem um Super Trunfo em seu baralho </p>
          ) : (
            <label htmlFor="field-trunfo">
              <input
                labelEnd
                type="checkbox"
                name="cardTrunfo"
                className="Form-cardTrunfo"
                id="field-trunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trybe Trunfo
            </label>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="Form-btnSubmit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
