// RELÓGIO
let horas = document.getElementById("horas")
let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")

let horasmenor = document.getElementById("horas-menor")
let minutosmenor = document.getElementById("minutos-menor")
let segundosmenor = document.getElementById("segundos-menor")

setInterval(function () {
    let today = new Date()

    let hr = today.getHours()
    let min = today.getMinutes()
    let seg = today.getSeconds()

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (seg < 10) seg = '0' + seg

    horas.textContent = hr
    minutos.textContent = ':' + min
    segundos.textContent = ':' + seg

    let dia = today.getDate()
    let mes = today.getMonth() + 1
    let ano = today.getFullYear()

    horasmenor.textContent = dia
    minutosmenor.textContent = mes
    segundosmenor.textContent = ano

}, 1000)


// ABRIR/FECHAR MODAL
const botao = document.getElementById("caixa-infor");
const tarefa = document.getElementById("adiciona-tarefa");

botao.addEventListener("click", () => {
    tarefa.classList.toggle("ativo");
});


// INPUTS
let titulo = document.getElementById("titulo")
let tarefas = document.getElementById("tarefas")

const adicionar = document.getElementById("Adicionar")


// VARIÁVEIS GLOBAIS (IMPORTANTE)
let tarefaSelecionada = null;
let contador = 0;

let botaoazul = document.getElementById("botaoazul")
let tarefaconcluida = document.getElementById("concluida")
let caixadeopcoes = document.getElementById("caixadeopcoes")

let metadodia = document.getElementById("numeroDeMeta")
let numerodemetadodia = 0
// ADICIONAR TAREFA
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


// FUNÇÃO CRIAR TAREFA
function criaLista() {

    const item = document.createElement("div");
    item.classList.add("minha-tarefa"); // ✔ sem ID duplicado
item.id = "minha-tarefa"
    const h3 = document.createElement("h3");
    h3.textContent = titulo.value;

    const p = document.createElement("p");
    p.textContent = tarefas.value;

    item.appendChild(h3);
    item.appendChild(p);

    numerodemetadodia++

    metadodia.textContent = numerodemetadodia
    // aqui

    // 👇 seleciona a tarefa clicada
    item.addEventListener("click", () => {
        tarefaSelecionada = item;
        caixadeopcoes.classList.toggle("apagaAtivo");
    });

    document.getElementById("tarefa").appendChild(item);

atualizaprogresso()

    // limpa os inputs
    titulo.value = "";
    tarefas.value = "";
}


// BOTÃO CONCLUIR (FORA DA FUNÇÃO!)
botaoazul.addEventListener("click", () => {

    if (tarefaSelecionada) {
        tarefaSelecionada.remove();

        contador++;
        tarefaconcluida.textContent = contador;
numerodemetadodia--        
metadodia.textContent = numerodemetadodia


        tarefaSelecionada = null;
        caixadeopcoes.classList.remove("apagaAtivo");
        atualizaprogresso()
    }

});

let valordoprogress = document.getElementById("valodoprogress")
function atualizaprogresso(){
   valordoprogress.max = numerodemetadodia
   valordoprogress.value = contador
}