// Fiz meu arquivo Edit.js pra armazenar todos meus dados principais da pág junto com minhas funções.
import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Card from './Card';
import CardList from './CardList';
import Filter from './Filter';

class General extends React.Component {
  constructor() {
    super();

    this.state = {
      ...this.defaultCard(),
    };
  }

    defaultCard = () => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
    });

  // Item 4
  // Função genérica que vai em todos os imputs pra receber os valores e atualizar meu estado
  // Assim como o meu form e card possuem o mesmo estado eles irão se repetir nos dois.
  handleFields = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  };

  // Item 5
  // Função que verifica se os valores passados pelo meu imput estão de acordo com o que foi pedido.
  hasError = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const { cards } = this.props;

    const attr1Number = Number(cardAttr1);
    const attr2Number = Number(cardAttr2);
    const attr3Number = Number(cardAttr3);
    const sumOfAttr = attr1Number + attr2Number + attr3Number;
    const maxSumOfAttr = 210;
    const minAttr = 0;
    const maxAttr = 90;

    if (!cardName || !cardDescription || !cardImage || !cardRare) return true;
    if (sumOfAttr > maxSumOfAttr) return true;
    if (attr1Number < minAttr || attr1Number > maxAttr) return true;
    if (attr2Number < minAttr || attr2Number > maxAttr) return true;
    if (attr3Number < minAttr || attr3Number > maxAttr) return true;
    if (cards.some((card) => card.cardName === cardName)) return true;

    return false;
  };

  // Item 6
  // Função que retorna um objeto com a chave da minha carta junto com o valor
  getCard = () => {
    const cardKeys = Object.keys(this.defaultCard());
    const card = {};
    cardKeys.forEach((key) => {
      const { [key]: cardValue } = this.state;
      card[key] = cardValue;
    });
    return card;
  };

  // Item 7 - função que utilizei o .some pra saber se ao menos 1 elemento está como true
  hasTrunfo = () => {
    const { cards } = this.props;
    return cards.some((card) => card.cardTrunfo);
  };

  // Item 6
  // Função pra salvar dentro do meu setState
    saveCard = (event) => {
      const { addCard } = this.props;
      event.preventDefault();
      addCard(this.getCard());
      this.setState({
        ...this.defaultCard(),
      });
    };

    // Itens 9, 10 e 11 - Função do filtro
    filterCards = () => {
      const { filterName, filterRare, filterTrunfo } = this.state;
      const { cards } = this.props;
      return cards.filter((card) => {
        // 1° o Item 9, que filtra pelo nome
        const filterByName = filterName
          ? card.cardName.toLowerCase().includes(filterName.toLowerCase())
          : true;
          // 2° o Item 11 o filtro pela raridade
        const filterByRare = filterRare === 'todas' ? true : card.cardRare === filterRare;
        // 3° o Item 12 o filtro do super Trunfo
        const filterByTrunfo = filterTrunfo ? card.cardTrunfo : true;
        // const teste = filterByTrunfo === card.cardTrunfo ? card.cardTrunfo : filterByName && filterByRare;
        return filterByName && filterByRare && filterByTrunfo;
        // return teste;
      });
    };

    desabilitar = () => {
      const { filterTrunfo } = this.state;
      if (filterTrunfo) return true;
    };

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
        filterName,
        filterRare,
        filterTrunfo,
      } = this.state;

      const { deleteCard } = this.props;

      // tudo que será retornado dentro do meu App.js
      return (
        <div className="Edit">
          <section className="Edit-addCard">
            {/* Item 1 e 2 - Div que armazena meu formulário */}
            <div className="novaCartaEPrevisualizacao">
              <div className="Edit-addCard-Form">
                <h2>Adicionar nova carta</h2>
                <Form
                  cardName={ cardName }
                  cardDescription={ cardDescription }
                  cardAttr1={ cardAttr1 }
                  cardAttr2={ cardAttr2 }
                  cardAttr3={ cardAttr3 }
                  cardImage={ cardImage }
                  cardRare={ cardRare }
                  cardTrunfo={ cardTrunfo }
                  onInputChange={ this.handleFields }
                  isSaveButtonDisabled={ this.hasError() }
                  onSaveButtonClick={ this.saveCard }
                  hasTrunfo={ this.hasTrunfo() }
                />
              </div>
              {/* Item 3 e 4 - Div que armazena meu card */}
              <div className="Edit-addCard-Card">
                <h2>Pré-visualização</h2>
                <Card
                  cardName={ cardName }
                  cardDescription={ cardDescription }
                  cardAttr1={ cardAttr1 }
                  cardAttr2={ cardAttr2 }
                  cardAttr3={ cardAttr3 }
                  cardImage={ cardImage }
                  cardRare={ cardRare }
                  cardTrunfo={ cardTrunfo }
                />
              </div>
            </div>
            {/* Itens 9 10 e 11 - Div que armazena o filtro de nome, raridade e super trunfo */}
            <div>
              <Filter
                onFilterChange={ this.handleFields }
                filterName={ filterName }
                filterRare={ filterRare }
                filterTrunfo={ filterTrunfo }
                desabilitar={ this.desabilitar() }
              />
            </div>
            {/* Item 8 - renderiza a minha lista de cartas */}
            <div className="todasAsCartas">
              <h2>Todas as cartas</h2>
              <CardList cards={ this.filterCards() } onDeleteButtonClick={ deleteCard } />
            </div>
          </section>
        </div>
      );
    }
}

General.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default General;
