require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // 1° teste
  it('este se fetchItem é uma função', async () => {
    await expect(typeof fetchItem).toBe('function');
  });

  // 2° testes
  // Use .toHaveBeenCalled para garantir que uma função de simulação (mock, em inglês) foi chamada com argumentos específicos.
  it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
    fetchItem('MLB1615760527');
    await expect(fetch).toHaveBeenCalled();
  });

  // 3° teste
  it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    fetchItem('MLB1615760527');
    const url = "https://api.mercadolibre.com/items/MLB1615760527";
    // a função .toHaveBeenCalledWith, Quando precisamos testar se a função foi executada com a url correta, é necessário testar a função fetch, pois ela é responsável pela execução da requisição.
    await expect(fetch).toHaveBeenCalledWith(url)
  });

  // 4° teste
  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const resultado = await fetchItem('MLB1615760527');
    expect(resultado).toEqual(item);
  });

  // 5° teste
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const chamadaFuncao = await fetchItem();
    const mensagemError = new Error('You must provide an url');
    expect(chamadaFuncao).toEqual(mensagemError);
  });
});

// INÍCIO DE PROJETO!!