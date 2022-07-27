export const CURRENCIES = 'CURRENCIES';
export const EXPENSE_NEW_ADD = 'EXPENSE_NEW_ADD';
export const DEL_EXPENSE = 'DEL_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const CHANGE_EDITION_EXPENSE = 'CHANGE_EDITION_EXPENSE';
export const RELEASE_BUTTON_EDIT = 'RELEASE_BUTTON_EDIT';

export const currenciesInfo = (currenciesData, currencies) => ({
  type: CURRENCIES,
  currenciesData,
  currencies,
});

export const addExpense = (expenseData) => ({
  type: EXPENSE_NEW_ADD,
  expenseData,
});

export const deleteExpense = (id) => ({
  type: DEL_EXPENSE,
  id,
});

export const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  expense,
});

export const changeEditionExpense = () => ({
  type: CHANGE_EDITION_EXPENSE,
});

export const releaseButtonEdit = (expenseEdit) => ({
  type: RELEASE_BUTTON_EDIT,
  expenseEdit,
});

export function fetchCurrenciesInfo() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => {
        const data = json;
        delete data.USDT;
        dispatch(currenciesInfo(data, Object.keys(data)));
      });
  };
}
