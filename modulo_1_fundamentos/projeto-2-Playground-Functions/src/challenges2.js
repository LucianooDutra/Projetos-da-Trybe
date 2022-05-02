// Inicio do projeto 2


// Desafio 11
// primeiro definir nome do parametro da função
// definir array com tamanho incorreto a partir se é diferente de 11
// adicionar todos os numeros dentro de uma variável
// fazer um for pra definir cada numero e jogar dentro de uma variável 'resultado'
// fazer outro for pra ver os numeros que se repetem e se for igual jogar dentro de 'resultado'
// definir se 'resultado' for maior que 2, não sera possivel gerar um numero
// definir se o numero do telefone for menor que zero e maior que nove, não é possivel ser gerado
// definir o modo como será mostrado o numero final na variável 'resultadoFinal'.

function generatePhoneNumber(numeroTelefone) {
  // seu código aqui

  if (numeroTelefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let numeroTelefone2 = numeroTelefone;

  for (let i = 0; i < numeroTelefone.length; i += 1) {
    let resultado = 0;
    for (let i2 = 0; i2 < numeroTelefone2.length; i2 += 1) {
      if (numeroTelefone[i] === numeroTelefone2[i2]) {
        resultado += 1;
      }
      if (resultado >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    if (numeroTelefone[i] < 0 || numeroTelefone[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let resultadoFinal = '(' + numeroTelefone2[0] + numeroTelefone2[1] + ')' + ' ' + numeroTelefone2[2] + numeroTelefone2[3] + numeroTelefone2[4] + numeroTelefone2[5] + numeroTelefone2[6] + '-' + numeroTelefone2[7] + numeroTelefone2[8] + numeroTelefone2[9] + numeroTelefone2[10];

  return resultadoFinal;
}


// Desafio 12
// primeiro definir parametros da função
// depois se qualquer um dos lados for maior que a soma dos outros dois, sera false.
// depois se qualquer um dos lados for menor que o valor absoluto da diferença entre as medidas dos outros dois lados, será false.
// Utilizar o 'math.abs' pra pegar o valor absoluto, será sempre positivo. como um módulo.


function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui


  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineB + lineA)) {
    return false;
  }
  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}


// Desafio 13
// primeiro pegar os numeros separadamente dos nomes das bebidas e acrescentar em uma nova variável;
// adicionar todos os numeros pra variável resultado;
// se o resultado for maior que 1 colocar ' copos de água', se for igual a 1 colocar ' copo de água'.

function hydrate(bebidas) {
  // seu código aqui

  let numeroDeBebidas = bebidas.match(/\d+/g).map(Number);
  let resultado = 0;

  for (let key of numeroDeBebidas) {
    resultado += key;
  }

  if (resultado > 1) {
    return resultado + ' copos de água';
  }
  return + resultado + ' copo de água';

}


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
