const main = document.querySelector('#main');

// Itens 5 e 6
// coloquei o item 5 e 6 antes do item 4 pra o botão de criar tarefa ficar acima da lista que será gerada
// criar botão 'criar tarefa'
function criarButtonAdicionar() {
  const criacaoOl = document.createElement('button');
  criacaoOl.id = 'criar-tarefa';
  main.appendChild(criacaoOl);
}
criarButtonAdicionar();
const botaoAdicionar = document.querySelector('#criar-tarefa');
botaoAdicionar.innerText = 'Criar tarefa';

// adicionar texto do input na lista de tarefas quando clicar no botão criar tarefa
// feito o evento de click que ao clicar faz a função de criar elemento 'li', adicionei a classe'list-item' e adicionei no local da minha lista de tarefas; sendo que o ultimo elemento adicionado no input sera o ultimo na lista;
// por fim o valor do input será vazio.

botaoAdicionar.addEventListener('click', () => {
  const localInput = document.querySelector('#texto-tarefa');
  const valorInput = localInput.value;
  const criacaoLi = document.createElement('li');
  criacaoLi.className = 'list-item';
  listaTarefas.appendChild(criacaoLi);
  listaTarefas.lastChild.innerText = valorInput;
  localInput.value = '';
});

// Item 4
// det a função que cria o elemento ol dentro da const main

function criarOl() {
  const criacaoOl = document.createElement('ol');
  criacaoOl.id = 'lista-tarefas';
  main.appendChild(criacaoOl);
}
criarOl();
const listaTarefas = document.querySelector('#lista-tarefas');

// Itens 7 e 8
// primeiro terei que retirar minha classe que chamei de 'selected', que contem meu backgroundColor gray, de todas as li da lista.

document.addEventListener('click', (event) => {
  const tarefas = listaTarefas.children;
  const evento = event;
  if (evento.target.classList.contains('list-item')) {
    for (let index = 0; index < tarefas.length; index += 1) {
      tarefas[index].classList.remove('selected');
    }
  }
});

// Por fim terei que adicionar minha classe 'selected' quando o item da lista receber o click.

document.addEventListener('click', (event) => {
  const evento = event;
  if (evento.target.classList.contains('list-item')) {
    evento.target.className += ' selected';
  }
});

// Item 9
// da mesma forma que fiz nos itens 7 e 8 faço aqui, adicionando a classe 'completed'

document.addEventListener('dblclick', (event) => {
  const evento = event;
  if (evento.target.classList.contains('list-item')) {
    if (evento.target.classList.contains('completed')) {
      evento.target.className = 'list-item';
    } else {
      evento.target.className += ' completed';
    }
  }
});

// Item 10
// primeiro fazer a função que cria o button com o id desejado no local que criei direto no html
// Depois coloco a função que ira acontecer a ter um click no botão de apagar tudo, onde irá remover todas as tarefas que estarão na lista de tarefas

function criarButtonApagarTudo() {
  const localBotoes = document.querySelector('.botoes');
  const criacaoButton1 = document.createElement('button');
  criacaoButton1.id = 'apaga-tudo';
  criacaoButton1.innerText = 'Apagar tudo';
  localBotoes.appendChild(criacaoButton1);
}
criarButtonApagarTudo();

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  const tarefas = listaTarefas.children;
  for (let i = tarefas.length - 1; i <= tarefas.length && i >= 0; i -= 1) {
    listaTarefas.removeChild(tarefas[i]);
  }
});

// Item 11
// Bem parecido com o Item 10, criei a função pra criar o botão pra armazenar meu id remover-finalizados
// Depois criei o evento que será o click, nesse evento irá retomar uma função, nela ira percorrer todos os itens da lista, se ele conter a classe completed que é os intens finalizados, ele será removido da lista de tarefas.

function criarButtonRemoverFinalizados() {
  const localBotoes = document.querySelector('.botoes');
  const criacaoButton2 = document.createElement('button');
  criacaoButton2.id = 'remover-finalizados';
  criacaoButton2.innerText = 'Remover finalizados';
  localBotoes.appendChild(criacaoButton2);
}
criarButtonRemoverFinalizados();

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  const tarefas = listaTarefas.children;
  for (let i = tarefas.length - 1; i < tarefas.length && i >= 0; i -= 1) {
    if (tarefas[i].classList.contains('completed')) {
      listaTarefas.removeChild(tarefas[i]);
    }
  }
});

// Item 12
// primeiramente, criei o botão pra salvar o id salva-tarefas
// Segundo, coloquei um evento de click no botão pra ativar a função de salvar a minha lista de tarefas no meu localStorage
// terceiro, coloquei a função em que toda vez que a pag for carregada a função ira ver se em no localStorage algo salvo, se tiver irá retornar a lista de tarefas.

function criarButtonSalvarTarefas() {
  const localBotoes = document.querySelector('.botoes');
  const criacaoButton3 = document.createElement('button');
  criacaoButton3.id = 'salvar-tarefas';
  criacaoButton3.innerText = 'Salvar tarefas';
  localBotoes.appendChild(criacaoButton3);
}
criarButtonSalvarTarefas();

document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  localStorage.setItem('key', listaTarefas.innerHTML);
});

window.onload = function recarregarLista() {
  const localKey = localStorage.getItem('key');
  if (localKey !== undefined) {
    listaTarefas.innerHTML = localKey;
  }
};

// Item 13

// criar botão mover cima
function criarButtonMoverCima() {
  const localBotoes = document.querySelector('.botoes');
  const criacaoButton4 = document.createElement('button');
  criacaoButton4.id = 'mover-cima';
  criacaoButton4.innerText = 'Mover pra cima';
  localBotoes.appendChild(criacaoButton4);
}
criarButtonMoverCima();

// ciar botão mover baixo
function criarButtonMoverBaixo() {
  const localBotoes = document.querySelector('.botoes');
  const criacaoButton5 = document.createElement('button');
  criacaoButton5.id = 'mover-baixo';
  criacaoButton5.innerText = 'Mover pra baixo';
  localBotoes.appendChild(criacaoButton5);
}
criarButtonMoverBaixo();

// criar função pra mover os elementos
// Utilizei os links dos sites abaixo pra aprender sobre os comandos previousSibling e nextElementSibling
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/previousSibling
// https://www.w3schools.com/jsref/prop_node_previoussibling.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
// mover cima
document.querySelector('#mover-cima').addEventListener('click', () => {
  const caminhoSelected = document.querySelector('.selected');
  if (caminhoSelected !== null) {
    const tarefaAnterior = caminhoSelected.previousSibling;
    if (caminhoSelected.previousSibling !== null) {
      listaTarefas.removeChild(caminhoSelected.previousSibling);
      listaTarefas.insertBefore(tarefaAnterior, caminhoSelected.nextElementSibling);
    }
  }
});

// mover baixo
document.querySelector('#mover-baixo').addEventListener('click', () => {
  const caminhoSelected = document.querySelector('.selected');
  if (caminhoSelected !== null) {
    const tarefaPosterior = caminhoSelected.nextElementSibling;
    if (caminhoSelected.nextElementSibling !== null) {
      listaTarefas.removeChild(caminhoSelected.nextElementSibling);
      listaTarefas.insertBefore(tarefaPosterior, caminhoSelected);
    }
  }
});

// Item 14
// Igual ao item 11, unica diferença que ao inves de remover o item com a id #completed, irá remover com o id #selected.

function criarButtonRemoverSelecionados() {
  const localBotoes = document.querySelector('.botoes');
  const criacaoButton3 = document.createElement('button');
  criacaoButton3.id = 'remover-selecionado';
  criacaoButton3.innerText = 'Remover selecionado';
  localBotoes.appendChild(criacaoButton3);
}
criarButtonRemoverSelecionados();

document.querySelector('#remover-selecionado').addEventListener('click', () => {
  const tarefa = listaTarefas.children;
  for (let i = 0; i < tarefa.length; i += 1) {
    if (tarefa[i].classList.contains('selected')) {
      listaTarefas.removeChild(tarefa[i]);
    }
  }
});
