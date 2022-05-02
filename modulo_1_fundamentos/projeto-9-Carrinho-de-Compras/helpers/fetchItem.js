// Item 2
// Utilizando o async e await
// Após a aula de revisão do dia 27/04, senti mais confiante em utilizar o async e await.
// não utiliza o 2° then com o data. ele encurta 1 passo.
const fetchItem = async (ItemID) => {
  const url = `https://api.mercadolibre.com/items/${ItemID}`;

  try {
    const result = await fetch(url); 
    const data = await result.json();
    // console.log(data);
    return data;  
  } catch (error) {
    return new Error('You must provide an url', error);
  }
};

// Utilizando o .then
// const fetchItem = (ItemID) => {
//   const resultado = fetch(`https://api.mercadolibre.com/items/${ItemID}`)
//     .then((response) => response.json())
//     .catch(() => new Error('You must provide an url'));

//   return resultado;
// };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
