// Item 12
// coloquei o item 12 antes do item 2 porque ele vai gerar as novas cores e o item 2 vai pegar as cores que ele gerar e jogar pra pag.
// utilizei o math.random pra gerar um numero aleatorio entre 0 e 1
// se voltar a cor branca que e 255 será refeita a função, gerando uma nova cor 

function gerarCorAleatoria() {

    const cor1 = (Math.random() * 256) - 1;
    const cor2 = (Math.random() * 256) - 1;
    const cor3 = (Math.random() * 256) - 1;

    if (cor1 === 255 && cor2 === 255 && cor3 === 255) {

        return gerarCorAleatoria();
    }

    const resultadoCores = `rgb(${cor1},${cor2},${cor3})`;
    return resultadoCores;
}


// Item 2
// Verificando se há cores repetidas, se houver será gerado uma nova cor com a função anterior

function repeticaoCores(valor) {

    const caminhoColor = document.querySelectorAll('.color');
    const corAleatoria = gerarCorAleatoria();

    if (caminhoColor.length === 0) {
        return corAleatoria;
    }
    if (corAleatoria === caminhoColor) {
        repeticaoCores(valor);
    }
    return corAleatoria;
}


// Item 2
// Item refeito por causa do numero 12, preferi fazer do zero e adicionar a nova cor gerada a ele, sem ter definido alguma no css.
// Criei uma função pra criar elementos div, onde cada div receberá a classe color, o background com a cor def no item anterior e com a borda. Assim adicionei no local que quero.

function quantidadeCores(valor) {

    const caminhoColorPalette = document.querySelector('#color-palette');

    for (let i = 1; i <= valor; i += 1) {
        const divCriada = document.createElement('div');
        divCriada.className = 'color';
        divCriada.style.backgroundColor = repeticaoCores(valor);
        divCriada.style.border = '1px solid black';
        caminhoColorPalette.appendChild(divCriada);
    }
}
quantidadeCores(4);


// Item 3
// def a cor preta como sendo a posição 0

function corPreta() {

    const cores = document.querySelectorAll('.color');
    const primeiraPosicao = cores[0];
    primeiraPosicao.style.backgroundColor = 'black';
}
corPreta();


// Item 6
// def que a cor preta receberá, sempre que a pag atualizar, a classe selected

function primeiroPreto() {

    const caminhoColor = document.querySelector('.color');
    caminhoColor.classList.add('selected');
}


// Item 8
// def que ao ter um click em det local do pixel, esse local recebeu uma função que ao ser clicado ele receberá a cor no background igual a cor onde a classe selected está.

function preencherPixel() {

    const caminhoPixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < caminhoPixel.length; i += 1) {
        const resultado = caminhoPixel[i];
        resultado.addEventListener('click', () => {
            const corSelecionada = document.querySelector('.selected');
            const corBackground = corSelecionada.style.backgroundColor;
            resultado.style.backgroundColor = corBackground;
        });
    }
}

// Item 4
// def uma função onde colocarei o numero de pixel como parametro
// dependendo do valor colocado irá gerar as divs que irá armazenar o pixel
// def dentro de cada div nova a classe pixel, o background white e adicionei na div que tinha criado anteriormente.
// def que no final desta função ele irá executar as duas outras funçoes anteriormente, uma que diz que o elemento de cor preta tera a classe select; por segundo a função que preenche o pixel com a cor que esta com a classe selected.

function quadroPixels(valor) {
    const caminhoIdPixelBoard = document.querySelector('#pixel-board');
    for (let index = 1; index <= valor; index += 1) {
        const criarDiv = document.createElement('div');
        criarDiv.className = 'divNova';
        for (let i = 1; i <= valor; i += 1) {
            const criarDiv2 = document.createElement('div');
            criarDiv2.className = 'pixel';
            criarDiv2.style.backgroundColor = 'white';
            criarDiv.appendChild(criarDiv2);
        }
        caminhoIdPixelBoard.appendChild(criarDiv);
        primeiroPreto();
        preencherPixel();
    }
}
quadroPixels(5);

// Item 7
// primeiramente a função principal irá percorrer todos os elementos de color e armazenar dentro de uma variável
// ao clicar no valor da variável ira remeter um evento de click que terá a função de percorrer todos os valores e retirar a classe selected dela
// após tirar a classe selected ele irá adicionar a classe dentro de outro elemento, assim o elemento novo irá ter a classe selected

function selecionarCor() {

    const caminhoColor = document.querySelectorAll('.color');

    for (let key = 0; key < caminhoColor.length; key += 1) {
        const resultado = caminhoColor[key];
        resultado.addEventListener('click', () => {
            for (let i = 0; i < caminhoColor.length; i += 1) {
                caminhoColor[i].classList.remove('selected');
            }
            resultado.classList.add('selected');
        });
    }
}
selecionarCor();


// Item 9
// Criei um button no html com o id clear-board
// adicionei o evento de click no button que ira retormar a função de transformar todos os elementos de pixel pra o background white.

function limpeza() {

    const caminhoClear = document.getElementById('clear-board');
    caminhoClear.addEventListener('click', () => {
        const caminhoPixel = document.querySelectorAll('.pixel');
        for (let i = 0; i < caminhoPixel.length; i += 1) {
            caminhoPixel[i].style.backgroundColor = 'white';
        }
    });
}
limpeza();


// Item 11
// det função que pega o valor de board-size e ver, se ele estiver entre 1 e 5 irá colocar o quadro de pixel como o valor 5; se for maior que 50 irá colocar o quadro de pixel com valor 50.
// ficou antes do item 10 porque o item 10 tem que ver antes do valor passado está dentro desses if.
// não preciso ativar a função porque será ativa somento no item 10.

function limiteTamanho() {

    const caminhoIdBoardSize = document.getElementById('board-size');
    const valorBoardSize = caminhoIdBoardSize.value;
    const caminhoPixelBoard = document.getElementById('pixel-board');
    if (valorBoardSize >= 1 && valorBoardSize <= 5) {
        caminhoPixelBoard.innerHTML = '';
        quadroPixels(5);
    } else if (valorBoardSize >= 50) {
        caminhoPixelBoard.innerHTML = '';
        quadroPixels(50);
    }
}


// Item 10
// Criei o input dentro do arq HTML, colocando que retornarar um valor e será como min o valor 1 e max de 50; porém como no item 11 ele pede pra ir além de 50, tive que tirar.
// crio a função em que, ao def um valor no input e clicar no botão VQV acontece um evento de click
// o evento de click remete uma função em que o valor colocado no input será analisado; se ele for vazio irá retormar um alert, se for entre 5 e 50 irá colocar o valor dentro da função quadropixel que diz o tamanho dos pixels; se não irá retormar a função do item 11 pra analisar se estar entre 1 e 5 e maior que 50.


function tamanhoQuadroPixel() {

    const caminhoIdBoardSize = document.getElementById('board-size');
    const caminhoIdGenerateBoard = document.getElementById('generate-board');
    caminhoIdGenerateBoard.addEventListener('click', () => {
        const valorBoardSize = caminhoIdBoardSize.value;
        const caminhoPixelBoard = document.getElementById('pixel-board');
        if (valorBoardSize === '') {
            alert('Board inválido!');
        } else if (valorBoardSize > 5 && valorBoardSize < 50) {
            caminhoPixelBoard.innerHTML = '';
            quadroPixels(valorBoardSize);
        } else {
            limiteTamanho();
        }
    });
}
tamanhoQuadroPixel();
