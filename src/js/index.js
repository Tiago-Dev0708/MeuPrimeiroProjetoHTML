/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões 
    - passo 2 - dar um jeito de identificar o clique do usuario no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicando como se estivesse selecionado
    - passo 5 -  
    - passo 6 - 
    */

//  - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
//  - passo 2 - dar um jeito de identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // - passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // - passo 4 - marcar o botão clicando como se estivesse selecionado
        MarcarBotaoSelecionado(botao);

        // - passo 5 - esconder a imagem anteriormente selecionada
        EsconderImgAtiva();

        // - passo 6 - fazer aparecer a imagem correspondente ao botao clicando
        MostrarImgdeFundo(indice);

        // - passo 7 - esconder a informação do dragão anteriormente selecionado

        EsconderInfosAtivas();

        // - passo 8 - mostrar a informação do dragão referente ao botão clicado
        MostrarInfos(indice);
    });
});


function MarcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function MostrarInfos(indice) {
    informacoes[indice].classList.add("ativa");
}

function EsconderInfosAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function MostrarImgdeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function EsconderImgAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

