// Item 4
// função que chama o conteudo guardado no meu localstorage, irei colocar ao iniciar a pagina no window.onload
// O atributo outerHTML da estrutura DOM(Document object model) obtem  um fragmento serializado de código HTML descrevendo o elemento incluindo seus descendentes. É possível substituir o elemento em questão com nós obtidos através da análise de uma string.
const getSavedCartItems = () => {
  const localproduto = localStorage.getItem('cartItems');
  if (localproduto) {
    document.querySelector('.cart__items').outerHTML = localproduto;
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
