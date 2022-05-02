const localBotaoHeader = document.getElementById('entrar');
const localEmail = document.getElementById('email');
const localSenha = document.getElementById('senha');
const checkbox = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
counter.innerText = 500;

// Item 3
// adicionei o evento de click no botão de entrar onde ao clicar ativa a função
// A função ver se o valor digitato na caixa de email e senha são iguais ao que se pede, se for retorna um alerta, se não for retorna outro alerta.

localBotaoHeader.addEventListener('click', () => {
  if (
    localEmail.value === 'tryber@teste.com' && localSenha.value === '123456'
  ) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

// Item 18
// adiciona um event listener no checkbox com a função confirmCheckbox
// a função valida se o checkbox esta marcado e caso esteja ela habilita o botão de enviar, caso contrario ele continua/fica desabilitado

function confirmCheckbox() {
  if (checkbox.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}

checkbox.addEventListener('click', confirmCheckbox);

// Item 20

function contaCaracter() {
  const quantidade = textArea.value.length;
  const max = 500 - quantidade;
  counter.innerText = max;
}

textArea.addEventListener('keyup', contaCaracter);
textArea.addEventListener('keypress', contaCaracter);
