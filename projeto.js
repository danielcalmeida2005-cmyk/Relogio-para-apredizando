// ========================================
// MENU MOBILE
// ========================================

const div = document.createElement("div");
div.className = "opcoesdemenumobile";

const buttonmenu = document.createElement("button");
buttonmenu.className = "imagem";
buttonmenu.textContent = "Tema";

div.appendChild(buttonmenu);

const links = [
    "Relogio",
    "Cronometro",
    "Temporizador"
];

links.forEach(texto => {

    const a = document.createElement("a");

    a.textContent = texto;
    a.href = "#";
    a.className = "animacao";

    div.appendChild(a);

});

document.body.appendChild(div);


// ========================================
// ENGRENAGEM
// ========================================

const botaodaengrenagem = document.getElementById("configuracao");
const engrenagem = document.querySelector("#configuracao i");

let girou = false;

botaodaengrenagem.addEventListener("click", () => {

    engrenagem.classList.remove("esquerda");
    engrenagem.classList.remove("direita");

    void engrenagem.offsetWidth;

    if (!girou) {
        engrenagem.classList.add("esquerda");
    } else {
        engrenagem.classList.add("direita");
    }

    girou = !girou;

    div.classList.toggle("ativamenumobile");

    if (div.classList.contains("ativamenumobile")) {
        container.classList.remove("ativafotos");
    }

});


// ========================================
// TEMA / FUNDOS
// ========================================

const container = document.querySelector("#container");

buttonmenu.addEventListener("click", () => {

    container.classList.toggle("ativafotos");

    if (container.classList.contains("ativafotos")) {
        div.classList.remove("ativamenumobile");
    }

});

const imagens = document.querySelectorAll(".opcoes img");

imagens.forEach(function (imagem) {

    imagem.addEventListener("click", function () {

        let fundo = imagem.src;

        document.body.style.backgroundImage = `url(${fundo})`;

        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";

        document.body.classList.add("fundo-ativo");

    });

});

const reset = document.querySelector(".reset");

reset.addEventListener("click", function () {

    document.body.style.backgroundImage = "none";

    document.body.classList.remove("fundo-ativo");

});


// ========================================
// RELÓGIO
// ========================================

const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const horasmenor = document.getElementById("horas-menor");
const minutosmenor = document.getElementById("minutos-menor");
const segundosmenor = document.getElementById("segundos-menor");

setInterval(function () {

    let today = new Date();

    let hr = today.getHours();
    let min = today.getMinutes();
    let seg = today.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = ':' + min;
    segundos.textContent = ':' + seg;

    let dia = today.getDate();
    let mes = today.getMonth() + 1;
    let ano = today.getFullYear();

    horasmenor.textContent = dia;
    minutosmenor.textContent = mes;
    segundosmenor.textContent = ano;

}, 1000);


// ========================================
// MODAL
// ========================================

const botao = document.getElementById("caixa-infor");
const tarefa = document.getElementById("adiciona-tarefa");

botao.addEventListener("click", () => {

    tarefa.classList.toggle("ativo");

});


// ========================================
// SISTEMA DE TAREFAS
// ========================================

const titulo = document.getElementById("titulo");
const tarefas = document.getElementById("tarefas");

const adicionar = document.getElementById("Adicionar");

const botaoazul = document.getElementById("botaoazul");
const tarefaconcluida = document.getElementById("concluida");

const caixadeopcoes = document.getElementById("caixadeopcoes");

const metadodia = document.getElementById("numeroDeMeta");

const listaTarefas = document.getElementById("tarefa");

let tarefaSelecionada = null;

let contador = 0;
let numerodemetadodia = 0;

adicionar.addEventListener("click", () => {

    if (titulo.value == '' || tarefas.value == '') {

        titulo.classList.add("treme");
        tarefas.classList.add("treme");

        setTimeout(() => {

            titulo.classList.remove("treme");
            tarefas.classList.remove("treme");

        }, 300);

        return;
    }

    criaLista();

    tarefa.classList.remove("ativo");

});

function criaLista() {

    const item = document.createElement("div");

    item.classList.add("minha-tarefa");

    const h3 = document.createElement("h3");
    h3.textContent = titulo.value;

    const p = document.createElement("p");
    p.textContent = tarefas.value;

    item.appendChild(h3);
    item.appendChild(p);

    listaTarefas.appendChild(item);

    numerodemetadodia++;

    metadodia.textContent = numerodemetadodia;

    atualizaprogresso();

    item.addEventListener("click", () => {

        tarefaSelecionada = item;

        caixadeopcoes.classList.toggle("apagaAtivo");

    });

    titulo.value = "";
    tarefas.value = "";

}

botaoazul.addEventListener("click", () => {

    if (tarefaSelecionada) {

        tarefaSelecionada.remove();

        contador++;

        tarefaconcluida.textContent = contador;

        numerodemetadodia--;

        metadodia.textContent = numerodemetadodia;

        tarefaSelecionada = null;

        caixadeopcoes.classList.remove("apagaAtivo");

        atualizaprogresso();

    }

});


// ========================================
// PROGRESSO
// ========================================

const valordoprogress = document.getElementById("valodoprogress");

function atualizaprogresso() {

    valordoprogress.max = numerodemetadodia;

    valordoprogress.value = contador;

}