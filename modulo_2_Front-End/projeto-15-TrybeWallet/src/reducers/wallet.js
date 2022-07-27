// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  CURRENCIES,
  EXPENSE_NEW_ADD, DEL_EXPENSE,
  EDIT_EXPENSE,
  CHANGE_EDITION_EXPENSE,
  RELEASE_BUTTON_EDIT,
} from '../actions/walletAction';

const INITIAL_STATE = {
  currenciesData: {},
  currencies: [],
  expenses: [],
  editExpense: {},
  whenEdit: false,
  releaseButton: false,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currenciesData: action.currenciesData,
      currencies: action.currencies,
    };
  case EXPENSE_NEW_ADD:
    return {
      ...state,
      expenses: [...state.expenses, action.expenseData],
    };
  case DEL_EXPENSE:
    return {
      ...state,
      expenses: action.id,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editExpense: action.expense,
      whenEdit: true,
    };
  case CHANGE_EDITION_EXPENSE:
    return {
      ...state,
      whenEdit: false,
      releaseButton: true,
    };
  case RELEASE_BUTTON_EDIT:
    return {
      ...state,
      expenses: state.expenses.map((exp) => {
        if (exp.id === action.expenseEdit.id) {
          return action.expenseEdit;
        }
        return exp;
      }),
      releaseButton: false,
    };
  default:
    return state;
  }
};

export default walletReducer;
