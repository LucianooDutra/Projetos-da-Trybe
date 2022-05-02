const localCirculoDeCores = document.querySelector('#circulosDeCores');
const caminhoClick = document.querySelector('#acertouOuErrou');
const localBotao = document.querySelector('#botaoResetar');
const pontuacao = document.querySelector('.pontuacao');

// Item 2
// det uma função para criar meu h1 com o id rgb-color e o texto.

const localH1 = document.querySelector('#itemDois');
const criacaoH1 = document.createElement('h1');
criacaoH1.id = 'rgb-color';
localH1.appendChild(criacaoH1);

// Item 4
// fiz a função pra gerar 3 numeros aleatorios dentro do limite do rgb
// adicionei dentro do meu array de cores cada numero de forma separada
// por ultimo o retorno é o nome rgb + o valor que foi salvo dentro do array
// ele teve que vim antes do item 3 pois no item 3 vai ser pego justamento o numero das cores geradas

function gerarCor() {
  const arrayDeCores = [];
  for (let i = 0; i < 3; i += 1) {
    const numeroGerado = Math.random() * 255;
    arrayDeCores.push(Math.floor(numeroGerado));
  }
  return `rgb(${arrayDeCores[0]}, ${arrayDeCores[1]}, ${arrayDeCores[2]})`;
}

// Item 7
// criei o elemento li pra armazenar minha pontuação final
// dei o zero como pontuação inicial, dei o id pedido e adicionei no lugar que tem o caminho do html
// dentro da função do Item 5 coloquei uma variável pra armazenar a pontuação e colocalo como texto em caso de acerto.

const pontos = document.createElement('li');
pontos.innerText = '0';
pontos.id = 'score';
pontuacao.appendChild(pontos);


// Item 5
// Primeiro fiz a constante pra armazenar a h2 que vai dar o resultado, dei o nome do id com o texto inicial; e adicionei ao local final no html
// fiz a função pra pegar o nome da cor e comparar com o nome do local onde esta a cor escolhida; resultado se acertou ou errou
// e coloquei a chamada da função dentro do item 3, por isso ele ficou antes do item 3, onde adicionei o evento de clique, que ao ter o clique dentro da cor vai chamar a função que acabei de fazer pra comparar as cores e dar o resultado.

const resultadoJogo = document.createElement('h2');
resultadoJogo.id = 'answer';
resultadoJogo.innerText = 'Escolha uma cor';
caminhoClick.appendChild(resultadoJogo);

function clickColor(event) {
  const elemento = event.target;
  const corElemento = elemento.style.backgroundColor;
  if (corElemento === localH1.innerText) {
    resetarJogo();
    resultadoJogo.innerText = 'Acertou!';
    resultadoJogo.style.color = 'green';
    let resultado = parseInt(pontos.innerText, 10);
    resultado += 3;
    pontos.innerText = resultado;
  } else {
    resetarJogo();
    resultadoJogo.innerText = 'Errou! Tente novamente!';
    resultadoJogo.style.color = 'red';
  }
}

// Item 3
// fiz uma função que cria 6 li, adiciona a classe ball a todas, e no arquivo css editei pra que ficassem lado a lado
// tive que editar o item 3, pra ativar a função gerarCor e salvar em uma constante, e no lugar do backgroundColor pegar o valor da constante
// adicionei também essa constante no arrayDeCores, onde por ultimo peguei o valor da cor e coloquei como texto da minha h1

function criarCiculoCor() {
  const arrayDeCores = [];
  for (let i = 0; i < 6; i += 1) {
    const corGerada = gerarCor();
    const criarLi = document.createElement('li');
    criarLi.className = 'ball';
    criarLi.style.backgroundColor = corGerada;
    localCirculoDeCores.appendChild(criarLi);
    arrayDeCores.push(corGerada);
    criarLi.addEventListener('click', clickColor);
  }
  const corFinal = arrayDeCores[Math.floor(Math.random() * arrayDeCores.length)];
  criacaoH1.innerText = corFinal;
}
criarCiculoCor();

// Item 6
// primeiro criei o local onde iria receber o botão, adicionei o meu texto junto com id e por ultimo adicionei ele no local final dentro do html
// adicionei o evento de click ao ser clicado chama a função
// a função ele retoma a função inicial de recriar as cores novamente e volta ao texto inicial de escolha uma cor.

const botaoRecomecar = document.createElement('button');
botaoRecomecar.innerText = 'Recomeçar o Jogo';
botaoRecomecar.id = 'reset-game';
localBotao.appendChild(botaoRecomecar);
botaoRecomecar.addEventListener('click', resetarJogo);

function resetarJogo() {
  localCirculoDeCores.innerHTML = '';
  criarCiculoCor();
  resultadoJogo.innerText = 'Escolha uma cor';
  resultadoJogo.style.color = '#2e313d';
}
