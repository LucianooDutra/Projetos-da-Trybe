const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // 1° teste
  it('ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', async () => {
    const chamadaFuncao = await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled(chamadaFuncao);
  });

  // 2° teste
  it('ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', async () => {
    const parametro = '<ol><li>Item</li></ol>';
    await saveCartItems(parametro);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', parametro);
  });
});
