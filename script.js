let telaAtual = 0;

const telas = document.querySelectorAll(".tela");

let mensagemIntervalo = null;
let romanceIntervalo = null;
let roletaIntervalo = null;

let filmeEscolhido = false;
let codigoCorreto = false;
let girando = false;


/* =========================
   NAVEGAÇÃO
========================= */

function mostrarTela(numero) {

    if (numero < 0 || numero >= telas.length) {
        return;
    }

    telas[telaAtual].classList.remove("ativa");

    telaAtual = numero;

    telas[telaAtual].classList.add("ativa");

    const caixa =
        telas[telaAtual].querySelector(".caixa");

    if (caixa) {
        caixa.scrollTop = 0;
    }

    atualizarSetas();
}


function avancarTela() {

    if (telaAtual < telas.length - 1) {
        mostrarTela(telaAtual + 1);
    }
}


function voltarTela() {

    if (telaAtual > 0) {
        mostrarTela(telaAtual - 1);
    }
}


function atualizarSetas() {

    const voltar =
        document.getElementById("setaVoltar");

    const avancar =
        document.getElementById("setaAvancar");

    voltar.style.visibility =
        telaAtual === 0
            ? "hidden"
            : "visible";

    avancar.style.visibility =
        telaAtual === telas.length - 1
            ? "hidden"
            : "visible";
}


/* =========================
   PIPOCA
========================= */

function responderPipoca(resposta) {

    const elemento =
        document.getElementById("respostaPipoca");

    if (resposta === "sim") {

        elemento.innerText =
            "Sabia! 😌🍿";

    } else if (resposta === "claro") {

        elemento.innerText =
            "ESSA É A RESPOSTA CERTA KKKKK 🍿❤️";

    } else {

        elemento.innerText =
            "Vou fingir que não vi isso... 😭";
    }

    setTimeout(() => {
        mostrarTela(3);
    }, 1600);
}


/* =========================
   QUIZ
========================= */

function responderQuiz(proximaTela) {
    mostrarTela(proximaTela);
}


function resultadoQuiz(resposta) {

    const elemento =
        document.getElementById("resultadoQuiz");

    if (resposta === "sim") {

        elemento.innerText =
            "EXATAMENTE. O SISTEMA CONFIRMOU. 👀";

    } else if (resposta === "óbvio") {

        elemento.innerText =
            "KKKKKK então você já sabia desde o começo.";

    } else {

        elemento.innerText =
            "Hmm... o sistema discorda de você. 🤨";
    }

    setTimeout(() => {
        mostrarTela(6);
    }, 2200);
}


/* =========================
   ANÁLISE
========================= */

function iniciarAnalise() {
    mostrarTela(7);
}


/* =========================
   ÚLTIMA PIPOCA
========================= */

function ultimaPipoca(resposta) {

    const elemento =
        document.getElementById("ultimaResposta");

    if (resposta === "sim") {

        elemento.innerText =
            "Resposta aprovada. 🍿❤️";

    } else if (resposta === "claro") {

        elemento.innerText =
            "ASSIM EU GOSTO KKKKKKK 🍿";

    } else {

        elemento.innerText =
            "Vou considerar isso um talvez positivo. 👀";
    }

    setTimeout(() => {
        mostrarTela(8);
    }, 1600);
}


/* =========================
   ROLETA
========================= */

function girarRoleta() {

    if (girando) {
        return;
    }

    girando = true;

    const roleta =
        document.getElementById("roleta");

    const resultado =
        document.getElementById("resultadoRoleta");

    resultado.innerText = "";

    const opcoes = [
        "🎬 CINEMA",
        "🍿 PIPOCA",
        "😂 COMÉDIA",
        "❤️ ROMANCE",
        "👻 TERROR"
    ];

    let contador = 0;

    roleta.innerText =
        "🎰 GIRANDO...";

    roletaIntervalo =
        setInterval(() => {

            const aleatorio =
                opcoes[
                    Math.floor(
                        Math.random() *
                        opcoes.length
                    )
                ];

            roleta.innerText =
                "🎰 " + aleatorio;

            roleta.style.transform =
                "scale(" +
                (1 + Math.random() * 0.15) +
                ") rotate(" +
                (Math.random() * 8 - 4) +
                "deg)";

            contador++;

            if (contador >= 30) {

                clearInterval(
                    roletaIntervalo
                );

                const resultadoFinal =
                    opcoes[
                        Math.floor(
                            Math.random() *
                            opcoes.length
                        )
                    ];

                roleta.style.transform =
                    "scale(1)";

                roleta.innerText =
                    "🎰 " + resultadoFinal;

                resultado.innerText =
                    "✨ RESULTADO: " +
                    resultadoFinal;

                girando = false;
            }

        }, 100);
}


/* =========================
   CONVITE
========================= */

function aceitou() {
    mostrarTela(10);
}


function recusar() {

    const mensagens = [
        "Essa opção não existe. 😭",
        "Erro 404: recusa não encontrada.",
        "Tente novamente. 👀",
        "O sistema recomenda apertar ACEITO.",
        "Teté, não faz isso comigo KKKKK."
    ];

    const aleatoria =
        mensagens[
            Math.floor(
                Math.random() *
                mensagens.length
            )
        ];

    document.getElementById("recusa").innerText =
        aleatoria;
}


/* =========================
   MENSAGEM
========================= */

function escreverMensagem() {

    const elemento =
        document.getElementById("mensagem");

    if (mensagemIntervalo) {
        clearTimeout(mensagemIntervalo);
    }

    elemento.innerHTML = "";

    const linhas = [
        "Teté,",
        "",
        "talvez eu pudesse simplesmente ter mandado uma mensagem dizendo:",
        "",
        "\"bora no cinema sábado?\"",
        "",
        "Mas achei muito mais divertido fazer tudo isso KKKKK.",
        "",
        "No fim das contas, eu só queria te chamar pra sair de um jeito diferente.",
        "",
        "E, sinceramente...",
        "",
        "eu queria muito passar esse sábado com você. ❤️"
    ];

    let linhaAtual = 0;
    let caractereAtual = 0;

    function digitarLinha() {

        if (linhaAtual >= linhas.length) {

            mensagemIntervalo = null;

            return;
        }

        const linha =
            linhas[linhaAtual];

        if (linha === "") {

            elemento.innerHTML += "<br>";

            linhaAtual++;

            caractereAtual = 0;

            mensagemIntervalo =
                setTimeout(
                    digitarLinha,
                    150
                );

            return;
        }

        if (caractereAtual < linha.length) {

            elemento.innerHTML +=
                linha.charAt(
                    caractereAtual
                );

            caractereAtual++;

            mensagemIntervalo =
                setTimeout(
                    digitarLinha,
                    35
                );

        } else {

            elemento.innerHTML += "<br>";

            linhaAtual++;

            caractereAtual = 0;

            mensagemIntervalo =
                setTimeout(
                    digitarLinha,
                    300
                );
        }
    }

    digitarLinha();
}


/* =========================
   FILME
========================= */

function escolherFilme(nome) {

    filmeEscolhido = true;

    document.getElementById("filme").innerText =
        "Filme escolhido: " +
        nome +
        " 🎬";
}


function continuarFilme() {

    if (!filmeEscolhido) {

        document.getElementById("filme").innerText =
            "Escolhe um primeiro, Teté KKKKK 👀";

        return;
    }

    mostrarTela(13);
}


/* =========================
   INVESTIGAÇÃO
========================= */

let investigacaoNumero = 0;

function investigar() {

    const evidencias = [

        "🔎 Evidência 1: Gabriel claramente quer sair com Teté.",

        "🔎 Evidência 2: Existe um convite de cinema.",

        "🔎 Evidência 3: Há um ingresso personalizado.",

        "🔎 Evidência 4: O site inteiro foi feito por causa disso.",

        "🔎 Evidência final: CASO ENCERRADO. ❤️"

    ];

    document.getElementById("investigacao").innerText =
        evidencias[investigacaoNumero];

    investigacaoNumero++;

    if (
        investigacaoNumero >=
        evidencias.length
    ) {

        investigacaoNumero =
            evidencias.length - 1;
    }
}


function continuarInvestigacao() {
    mostrarTela(15);
}


/* =========================
   CERTEZA
========================= */

function certeza(resposta) {

    const elemento =
        document.getElementById(
            "certezaResposta"
        );

    if (resposta === "sim") {

        elemento.innerText =
            "Então você percebeu tudo. 👀❤️";

    } else {

        elemento.innerText =
            "Eu sabia que você ia desconfiar KKKKK.";
    }
}


function continuarCerteza() {
    mostrarTela(16);
}


/* =========================
   CORAÇÃO
========================= */

let cliquesCoracao = 0;

function clicarCoracao() {

    cliquesCoracao++;

    const elemento =
        document.getElementById(
            "segredo"
        );

    const mensagens = [

        "Hmm... nada aconteceu.",

        "Tem certeza que quer continuar?",

        "Você está chegando perto...",

        "Mais um clique.",

        "🤫 Segredo desbloqueado: Gabriel gosta de você. ❤️"

    ];

    elemento.innerText =
        mensagens[
            Math.min(
                cliquesCoracao - 1,
                mensagens.length - 1
            )
        ];
}


/* =========================
   NÃO CLIQUE
========================= */

let cliquesNao = 0;

function naoClique() {

    cliquesNao++;

    const mensagens = [

        "Eu falei pra não clicar. 😐",

        "Você clicou de novo.",

        "Teté...",

        "Sério mesmo?",

        "KKKKKKKKKK eu sabia.",

        "Pronto. Agora você desbloqueou o caos."

    ];

    document.getElementById(
        "naoCliqueResposta"
    ).innerText =
        mensagens[
            Math.min(
                cliquesNao - 1,
                mensagens.length - 1
            )
        ];
}


/* =========================
   CÓDIGO
========================= */

function verificarCodigo() {

    const input =
        document.getElementById(
            "codigo"
        );

    const resultado =
        document.getElementById(
            "resultadoCodigo"
        );

    const codigoDigitado =
        input.value
            .trim()
            .toUpperCase();

    if (
        codigoDigitado ===
        "TETÉ-LOVE-2026"
    ) {

        codigoCorreto = true;

        resultado.innerText =
            "🔓 CÓDIGO CORRETO! Você desbloqueou o próximo nível. ❤️";

    } else {

        codigoCorreto = false;

        resultado.innerText =
            "❌ Código incorreto. Olha melhor o ingresso. 👀";
    }
}


function continuarCodigo() {

    if (!codigoCorreto) {

        document.getElementById(
            "resultadoCodigo"
        ).innerText =
            "Primeiro precisa acertar o código KKKKK 🔐";

        return;
    }

    mostrarTela(22);
}


/* =========================
   ROMANCE
========================= */

function mostrarRomance() {

    if (romanceIntervalo) {

        clearInterval(
            romanceIntervalo
        );
    }

    const numero =
        document.getElementById(
            "romanceNumero"
        );

    const barra =
        document.getElementById(
            "romanceBarra"
        );

    let valor = 0;

    barra.style.width = "0%";

    numero.innerText = "0%";

    romanceIntervalo =
        setInterval(() => {

            valor++;

            numero.innerText =
                valor + "%";

            barra.style.width =
                valor + "%";

            if (valor >= 100) {

                clearInterval(
                    romanceIntervalo
                );

                romanceIntervalo = null;

                numero.innerText =
                    "100% ❤️";
            }

        }, 25);
}


/* =========================
   INÍCIO
========================= */

atualizarSetas();