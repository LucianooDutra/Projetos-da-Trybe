// Item 4
// função que adiciona o item do param, com o nome da chave cartItems no meu localStorage.
const saveCartItems = (produto) => {
  localStorage.setItem('cartItems', produto);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
