import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrenciesInfo } from '../actions/walletAction';
import AddExpenseForm from '../components/AddExpenseForm';
import Expenses from '../components/Expenses';
import '../css/wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    this.getAPI();
  }

  async getAPI() {
    const { fetchCurrenciesData } = this.props;
    await fetchCurrenciesData();
  }

  // função que faz o somatório de todas as despesas.
  amount = () => {
    const { expenses } = this.props;
    // multiplicação dos valores
    const mult = (value, exchangeRate) => parseFloat(value) * parseFloat(exchangeRate);

    // pego todos os valores juntos e somo, o total com o valor daquela despesa.
    const ExpensesAll = expenses.reduce(
      (sum, expense) => sum
        + mult(expense.value, expense.exchangeRates[expense.currency].ask),
      0,
    );
    return ExpensesAll.toFixed(2);
  };

  render() {
    const { email } = this.props;

    return (
      <main>
        <header>
          <h1>Wallet</h1>
          <div className="divHeaderWallet">
            <div>
              <span>Email: </span>
              <span data-testid="email-field">{email}</span>
            </div>
            <div>
              <span>Despesa total: R$</span>
              <span data-testid="total-field">{ this.amount() }</span>
            </div>
            <div>
              <span>Câmbio utilizado:</span>
              <span data-testid="header-currency-field"> BRL</span>
            </div>
          </div>
        </header>
        <AddExpenseForm />
        <Expenses />
      </main>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesData: () => dispatch(fetchCurrenciesInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCurrenciesData: PropTypes.func.isRequired,
  expenses: PropTypes.shape({
    filter: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
    reduce: PropTypes.func.isRequired,
  }).isRequired,
};
