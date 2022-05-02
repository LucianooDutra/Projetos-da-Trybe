// const getSavedCartItems = require('./helpers/getSavedCartItems');
// const saveCartItems = require('./helpers/saveCartItems');

const itemsSection = document.querySelector('.items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

// Item 1
// função que adiciona produtos:
// 1° chamo minha função fetchProducts com o parametro que passo na função getProduct
// 2° chamei meu primeiro then que irá percorrer meu response, fazendo o object destructuring pra me retornar um novo objeto
// 3° chamei o segundo then que vai chamar a função createProductItemElement pra cada parametro recebido e adiciona-los ao caminho da sessão
function getProduct(produto) {
  fetchProducts(produto)
    .then((response) => response.results.map((element) => {
      const { id: sku, title: name, thumbnail: image } = element;

      return {
        sku,
        name,
        image,
      };
    }))
    .then((data) => data.forEach((element) => {
      const item = createProductItemElement(element);
      itemsSection.appendChild(item);
    }))
    // retira o 1° filho da sessão, que no caso é o elemento de loading, do item 7.
    .then(() => itemsSection.removeChild(itemsSection.firstChild));
}

// 5° Item
// função que calcula o valor total
// primeiro pega o local de onde criei no html o span que tem a classe .total-price
function sumPricesInCart() {
  const sumDiv = document.querySelector('.total-price');
  let sumPrices = 0;
  const cartItemList = document.getElementsByClassName('cart__item');

  // utilizei o spread Operator pra pegar todos os itens que estará dentro do array
  // forEach pra percorrer esse array e adicionar o somatório dos valores dentro dele
  // .split divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método
  // .pop() remove o último elemento de um array e retorna aquele elemento.
  [...cartItemList].forEach((e) => {
    sumPrices += Number(e.innerHTML.split('$').pop());
  });

  sumDiv.innerHTML = sumPrices;
}

// 3° Item
// função que remove os itens do carrinho.
// chamo a função saveCartItems, pra salvar no meu LocalStorage

function cartItemClickListener(event) {
  const itensCarrinho = document.querySelector('.cart__items');
  itensCarrinho.removeChild(event.target);
  const dados = itensCarrinho.innerHTML;
  // totalPrice();
  sumPricesInCart();
  saveCartItems(dados);
}

// função do projeto
function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// 2° Item
// fiz a função assincrona
// document.getElementsByClassName('cart__items')[0]; porque o getElementsByClassName retorna uma lista(parecido com o array), por isso tenho que selecionar a posição [0] pra pegar a primeira opção.
// O if pra verificar se o parametro passado tiver a classe item__add, se tiver ele irá retornar um objeto
// por fim chamo minha função dada createCartItemElement com o parametro sendo o objeto, e depois adiciono a minha li no local da classe pedida
// chamo a função saveCartItems, pra salvar no meu LocalStorage
async function adicionaItemCarrinho(param) {
  const localItens = document.getElementsByClassName('cart__items')[0];
  if (param.target.classList.contains('item__add')) {
    const itemID = getSkuFromProductItem(param.target.parentElement);
    const produto = await fetchItem(itemID);

    const objProduto = {
      sku: itemID,
      name: produto.title,
      salePrice: produto.price,
    };
    const li = createCartItemElement(objProduto);
    localItens.appendChild(li);
    saveCartItems(localItens.outerHTML);
    // totalPrice();
    sumPricesInCart();
  }
}

// 2° Item
// função que adiciona um evento de click e chama a função adicionaItemCarrinho
function eventoCLickCarrinho() {
  document.addEventListener('click', adicionaItemCarrinho);
}

// 4° Item (FUNÇÃO NÃO MAIS NECESSÁRIA, POIS ESTAVA DANDO ERRO NO CONSOLE DO NAVEGADOR E TIVE QUE CHAMA-LA DIRETO NO WINDOW.ONLOAD)
// função que acrescenta um evento de click, que ao clicar nos elementos do carrinho ele chama a função cartItemClickListener, que o remove do carrinho.
// function removeItemFromCart() {
//   const elementosCarrinho = document.querySelector('.cart__items');
//   elementosCarrinho.addEventListener('click', cartItemClickListener);
// }

// Item 6
// função que zera meu carrinho de compras.
// pega o caminho do botão e do cart__items
// adiciona um evento de click que ao clicar no botão ele zera tudo.
function emptyCart() {
  const cart = document.querySelector('.cart__items');
  const emptyBtn = document.querySelector('.empty-cart');
  const total = document.querySelector('.total-price');

  emptyBtn.addEventListener('click', () => {
    cart.innerText = '';
    total.innerText = 0;
  });
  saveCartItems();
}

//  Item 7
// função que faz a mensagem de carregando.. aparecer antes da API carregar.
function mensagemLoading() {
  const mensagem = createCustomElement('span', 'loading', 'Carregando...');
  itemsSection.appendChild(mensagem);
}

window.onload = () => {
  mensagemLoading();
  getProduct('computador');
  getSavedCartItems();
  eventoCLickCarrinho();
  // totalPrice();
  // tive que chamar minha função de remover itens direto no window.onload porque estava trazendo um erro no console do navegador.
  const itens = document.querySelectorAll('.cart__item');
  itens.forEach((produto) => produto.addEventListener('click', cartItemClickListener));
  emptyCart();
};
