require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // 1° teste
  it('Teste se fetchProducts é uma função', async () => {
    await expect(typeof fetchProducts).toBe('function');
  });

  // 2° testes
  // Use .toHaveBeenCalled para garantir que uma função de simulação (mock, em inglês) foi chamada com argumentos específicos.
  it('função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    fetchProducts('computador');
    await expect(fetch).toHaveBeenCalled();
  });

  // 3° teste
  it('ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    fetchProducts('computador');
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    // a função .toHaveBeenCalledWith, Quando precisamos testar se a função foi executada com a url correta, é necessário testar a função fetch, pois ela é responsável pela execução da requisição.
    await expect(fetch).toHaveBeenCalledWith(url)
  });

  // 4° teste
  it('o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const resultado = await fetchProducts('computador');
    expect(resultado).toEqual(computadorSearch);
  });

  // 5° teste
  it('ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const chamadaFuncao = await fetchProducts();
    const mensagemError = new Error('You must provide an url');
    expect(chamadaFuncao).toEqual(mensagemError);
  });
});
