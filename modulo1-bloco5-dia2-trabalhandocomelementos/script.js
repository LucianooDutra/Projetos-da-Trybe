// Acesse o elemento elementoOndeVoceEsta .

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'primeiro filho do filho.';

// Acesse o primeiroFilho a partir de pai .

const primeiroFilho = pai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

const texto = elementoOndeVoceEsta.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai .

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;


// Crie um irmão para elementoOndeVoceEsta .

const pai2 = document.getElementById('pai');
const irmao = document.createElement('section');
irmao.id = 'irmao';
pai2.appendChild(irmao);


// Crie um filho para elementoOndeVoceEsta .

const eu = document.getElementById('elementoOndeVoceEsta');
const filho = document.createElement('section');
filho.id = 'filho';
eu.appendChild(filho);

// Crie um filho para primeiroFilhoDoFilho .

const primeirofilhodofilho = document.getElementById('primeiroFilhoDoFilho');
const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho .

const terceiroFilho = filhoPrimeiroFilhoDoFilho
    .parentElement
    .parentElement
    .nextElementSibling;
console.log(terceiroFilho);

