// Inicio do projeto 2

// Desafio 1
// com a função ja feita, só acrescentei os nomes dos parametros 'num1' e 'num2'.
// adicionei um if pra assim poder fazer a comparação entre os parametros colocados na função e o valor 'true', se caso num1 for igual a true e num2 igual a true será resultado 'true'.

function compareTrue(num1, num2) {
  // seu código aqui

  if (num1 === true && num2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
// com a função ja feita, só acrescentei os nomes dos parametros 'base' e 'height'.
// criei uma variável e chamei de 'areaTotal' pra armazenar o resultado do calculo da área.
// e ao se colocar o valor de 'base' e 'height' dentro da função, retorna a let 'area total' com o resultado.

function calcArea(base, height) {
  // seu código aqui

  let areaTotal = (base * height) / 2;

  return areaTotal;
}

// Desafio 3
// com a função ja feita, só acrescentei o nome do parametro 'texto'.
// criei uma variável e chamei de 'palavras' pra armazenar o formato de texto que vai ser gerado utilizando o '.split, dentro dele o ' ' pra separar as palavras.
// ao se colocar o texto dentro da função, irá retornar a let 'palavras' com o resultado armazenado.

function splitSentence(texto) {
  // seu código aqui

  let palavras = texto.split(' ');

  return palavras;
}


// Desafio 4
// colocar dentro da função o parametro;
// criar a variável vazia e dentro dela adicionar os resultatos;
// pegar a posição da ultima palavra e levar ela pra frente, depois colocar na seguência a primeira palavra da array.

function concatName(texto) {
  // seu código aqui
  let resultado = '';
  resultado = resultado.concat(texto[texto.length - 1], ', ', texto[0]);
  return resultado;
}


// Desafio 5
// Com a função ja feita, só acrescentei os nomes dos parametros 'wins' e 'ties'
// criei a variável 'totalDePontos' pra juntar o resultado final de pontos, no caso numero de vitorias multiplicado por 3, mais o numero de empates, que é só 1 ponto.

function footballPoints(wins, ties) {
  // seu código aqui
  // criei a variável 'totalDePontos' pra juntar o resultado final de pontos, no caso numero de vitorias multiplicado por 3, mais o numero de empates, que é só 1 ponto.

  let totalDePontos = (wins * 3) + ties;
  return totalDePontos;
}


// Desafio 6
// primeiro tenho que descobrir o maior número e depois adicionar na variável 'numeroMaior'.
// depois pegar o maior numero e comparar com todos os numeros novamente, e acrescentar na variável 'numeroRepeticoes'.

function highestCount(num) {
  // seu código aqui

  let numeroMaior = Math.max(...num);
  let numeroRepeticoes = 0;

  for (let i = 0; i <= num.length; i += 1) {
    if (numeroMaior === num[i]) {
      numeroRepeticoes += 1;
    }
  }
  return numeroRepeticoes;
}


// Desafio 7
// primeiramente tenho que adicionar os valores na função 'mouse', 'cat1' e 'cat2'
// segundo criei 2 variáveis pra armazenar os valores das distâncias do rato pra ambos os gatos
// utilizar o if pra definir o retorno pedido da distância menor do gato pra o rato ou a mensagem em caso de empate.

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaGato1 = Math.abs(mouse - cat1);
  let distanciaGato2 = Math.abs(mouse - cat2);

  if (distanciaGato1 > distanciaGato2) {
    return 'cat2';
  }
  if (distanciaGato2 > distanciaGato1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}


// Desafio 8
// Primeiro terei que definir uma variável com um array pra armazenar os resultados
// depois for of pra percorrer dentro da array com os valores
// tenho que colocar as sequencias de if e else pra obter os resultados e adicionar com o .push na variável 'resultado'

function fizzBuzz(numeros) {
  // seu código aqui

  let resultado = [];

  for (let key of numeros) {
    if ((key % 3) === 0 && (key % 5) === 0) {
      resultado.push('fizzBuzz');
    } else if (key % 3 === 0) {
      resultado.push('fizz');
    } else if (key % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}


// Desafio 9
// primeiro terei que fazer uma variável pra receber o texto da função e outra pra receber o texto codificado;
// Usar o for pra percorrer toda a estrutura do texto;
// Em cada if colocar, se a letra for igual a a letra que quero mudar, usarei o '.replace' pra trocar as letras;
// Repetir a mesma coisa pra função de descodificar

function encode(codificar) {
  // seu código aqui
  let texto = codificar;
  let textoCodificado = '';

  for (let index = 0; index <= texto.length; index += 1) {
    if (texto[index] === 'a') {
      textoCodificado = texto.replace('a', '1');
      texto = textoCodificado;
    }
    else if (texto[index] === 'e') {
      textoCodificado = texto.replace('e', '2');
      texto = textoCodificado;
    }
    else if (texto[index] === 'i') {
      textoCodificado = texto.replace('i', '3');
      texto = textoCodificado;
    }
    else if (texto[index] === 'o') {
      textoCodificado = texto.replace('o', '4');
      texto = textoCodificado;
    }
    else if (texto[index] === 'u') {
      textoCodificado = texto.replace('u', '5');
      texto = textoCodificado;
    }
  }
  return texto;
}


function decode(decodificar) {
  // seu código aqui
  let texto = decodificar;
  let textoDecodificado = '';

  for (let index = 0; index <= texto.length; index += 1) {
    if (texto[index] === '1') {
      textoDecodificado = texto.replace('1', 'a');
      texto = textoDecodificado;
    }
    else if (texto[index] === '2') {
      textoDecodificado = texto.replace('2', 'e');
      texto = textoDecodificado;
    }
    else if (texto[index] === '3') {
      textoDecodificado = texto.replace('3', 'i');
      texto = textoDecodificado;
    }
    else if (texto[index] === '4') {
      textoDecodificado = texto.replace('4', 'o');
      texto = textoDecodificado;
    }
    else if (texto[index] === '5') {
      textoDecodificado = texto.replace('5', 'u');
      texto = textoDecodificado;
    }
  }
  return texto;
}


// Desafio 10
// primeiro atribuir os valores pra função
// criar uma variável pra receber os resultados
// colocar em ordem alfabetica as tecnologias
// if, se tiver vazio retornar 0
// fazer o for pra percorrer toda as tecnologias, e o resultado adicionar na variável resultado de det forma.

function techList(tecnologias, name) {
  // seu código aqui

  let resultado = [];
  tecnologias = tecnologias.sort();

  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < tecnologias.length; i += 1) {
    resultado.push({ tech: tecnologias[i], name: name });
  }
  return resultado;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
