import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  addExpense,
  fetchCurrenciesInfo,
  changeEditionExpense,
  releaseButtonEdit,
} from '../actions/walletAction';

class AddExpenseForm extends React.Component {
  state = {
    value: 0,
    currency: 'USD',
    method: 'Dinheiro',
    tag: '',
    description: '',
    id: 0,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  ExpenseAdd = async (e) => {
    e.preventDefault();
    const { fetchCurrenciesData } = this.props;
    await fetchCurrenciesData();
    const { id } = this.state;
    const { saveExpenseNew, currenciesData: exchangeRates } = this.props;

    const expense = {
      ...this.state,
      exchangeRates,
    };

    saveExpenseNew(expense);

    this.setState({
      id: id + 1,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
      description: '',
    });
  };

  componentDidUpdate = () => {
    const { whenEdit } = this.props;
    if (whenEdit === true) {
      this.edition();
    }
  }

  edition = () => {
    const {
      editExpense,
      changeEditExpense,
    } = this.props;
    // console.log(editExpense);
    // console.log(whenEdit);
    this.setState({
      value: editExpense.value,
      currency: editExpense.currency,
      method: editExpense.method,
      tag: editExpense.tag,
      description: editExpense.description,
    });

    changeEditExpense();
  };

  funcWhenEdit = (data) => {
    const {
      releaseEdit,
      expenses,
      editExpense,
    } = this.props;
    console.log(editExpense);
    console.log(data);
    console.log(expenses);
    // console.log(expenses[1]);

    // const resultado = expenses;

    // const resultnew = resultado.reduce((acc, curr) => {
    //   if (curr.id === editExpense.id) {
    //     acc.push(editExpense);
    //   } else {
    //     acc.push(curr);
    //   }
    //   console.log(acc);
    //   return acc;
    // }, []);
    // console.log(resultnew);

    releaseEdit(editExpense);
  };

  // handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // }

  render() {
    const { value, description, currency, method, tag, id } = this.state;
    const { currencies, releaseButton } = this.props;

    return (
      <div className="divAddExpenseForm">
        <form onSubmit={ this.ExpenseAdd }>
          <label htmlFor="AddValue">
            Valor:
            <input
              type="text"
              data-testid="value-input"
              name="value"
              id="AddValue"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="AddDescription">
            Descrição:
            <input
              type="text"
              data-testid="description-input"
              name="description"
              id="AddDescription"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="AddCurrency">
            Moeda:
            <select
              id="AddCurrency"
              value={ currency }
              required
              name="currency"
              onChange={ this.handleChange }
            >
              {currencies.map((data) => (
                <option value={ data } key={ data }>{data}</option>
              ))}
            </select>
          </label>
          <label htmlFor="AddMethod">
            Método de pagamento:
            <select
              id="AddMethod"
              value={ method }
              required
              name="method"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="AddTag">
            Categotia:
            <select
              id="AddTag"
              value={ tag }
              required
              name="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          {releaseButton
            ? (
              <button
                className="btnDivAddExpense"
                type="button"
                onClick={ () => this.funcWhenEdit(id) }
              >
                Editar despesa
              </button>
            )
            : (
              <button
                className="btnDivAddExpense"
                type="submit"
              >
                Adicionar despesa
              </button>
            )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: {
  currencies,
  currenciesData,
  expenses,
  editExpense,
  whenEdit,
  releaseButton,
} }) => ({
  currencies,
  currenciesData,
  expenses,
  editExpense,
  whenEdit,
  releaseButton,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesData: () => dispatch(fetchCurrenciesInfo()),
  saveExpenseNew: (expense) => dispatch(addExpense(expense)),
  changeEditExpense: () => dispatch(changeEditionExpense()),
  releaseEdit: (editExpense) => dispatch(releaseButtonEdit(editExpense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);

AddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrenciesData: PropTypes.func.isRequired,
  currenciesData: PropTypes.shape(PropTypes.object).isRequired,
  expenses: PropTypes.shape({ length: PropTypes.number.isRequired }).isRequired,
  saveExpenseNew: PropTypes.func.isRequired,
  whenEdit: PropTypes.bool.isRequired,
  editExpense: PropTypes.shape(PropTypes.object).isRequired,
  changeEditExpense: PropTypes.func.isRequired,
  releaseButton: PropTypes.bool.isRequired,
  releaseEdit: PropTypes.func.isRequired,
};
