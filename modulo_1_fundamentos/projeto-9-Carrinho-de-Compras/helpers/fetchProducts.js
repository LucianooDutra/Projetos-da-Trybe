// Item 1
// Utilizando o .then
// Peguei o resultado da API e transformei no formato .json que retorna um objeto com os dados
// const fetchProducts = ($QUERY) => {
//   const result = fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`)
//     .then((response) => response.json())
//     // .then((data) => data)
//     .catch(() => new Error('You must provide an url'));

//     return result;
// };

// Item 1
// usando async e await
// Após a aula de revisão do dia 27/04, senti mais confiante em utilizar o async e await.
// não utiliza o 2° then com o data. ele encurta 1 passo.
const fetchProducts = async ($QUERY) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`);
    const responseJson = await response.json();
    // console.log(responseJson.results);
    return responseJson;
  } catch (error) {
    return new Error('You must provide an url', error);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
