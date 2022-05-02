const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // 1° teste
  it('ao executar getSavedCartItems, o método localStorage.getItem é chamado', async () => {
    const chamadaFuncao = await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled(chamadaFuncao);
  });
  // 2° teste
  // it('ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro', () => {
  //   getSavedCartItems();
  //   expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  // });
  it('Verifica se o método localStorage.getItem é chamado com o param correto', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
