import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense, editExpense } from '../actions/walletAction';

class Expenses extends React.Component {
  convertValue(value, exchangeValue) {
    return (parseFloat(value) * parseFloat(exchangeValue)).toFixed(2);
  }

  dellExpense(id) {
    const { delExpense, expenses } = this.props;
    // const { delExpense } = this.props;
    console.log(id);

    const upExpenses = expenses.filter((expense) => expense.id !== id);

    delExpense(upExpenses);
  // delExpense(id);
  }

  editExpense(expense) {
    // console.log(expense);
    const { editionExpense } = this.props;
    editionExpense(expense);
  }

  render() {
    const { expenses } = this.props;
    // console.log(expenses);
    return (
      <section className="Expenses">
        <table>
          <thead className="expenseTitle">
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody className="expensesTable">
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{Number(expense.value).toFixed(2)}</td>
                <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
                <td>
                  {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
                </td>
                <td>
                  {this.convertValue(
                    expense.value,
                    expense.exchangeRates[expense.currency].ask,
                  )}
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => this.editExpense(expense) }
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.dellExpense(expense.id) }
                    // onClick={ () => delExpense(expense.id) }
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpense: (expenses) => dispatch(deleteExpense(expenses)),
  editionExpense: (expense) => dispatch(editExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  delExpense: PropTypes.func.isRequired,
  editionExpense: PropTypes.func.isRequired,
};
