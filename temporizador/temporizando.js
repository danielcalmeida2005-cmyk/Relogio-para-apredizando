// chama os spans
let dias = document.getElementById("dias-numero")
let horas = document.getElementById("horas-numero")
let minutos = document.getElementById("minutos-numero")
let segundos = document.getElementById("segundos-numero")

let valor = document.getElementById("valor")
let unidade = document.getElementById("unidade")
let botaoadiciona = document.getElementById("adicionar")

let intervalo;


function atualizarTempo(total) {
    let d = Math.floor(total / 86400)
    let h = Math.floor((total % 86400) / 3600)
    let m = Math.floor((total % 3600) / 60)
    let s = total % 60

    dias.textContent = d.toString().padStart(2, "0")
    horas.textContent = h.toString().padStart(2, "0")
    minutos.textContent = m.toString().padStart(2, "0")
    segundos.textContent = s.toString().padStart(2, "0")
}

botaoadiciona.addEventListener("click", () => {
    let valornumero = Number(valor.value)
    let tipo = unidade.value
    let totalsegundos = 0

    // validação
    if (valornumero <= 0) {

    valor.classList.add("erro","treme")
    

    setTimeout(() => {
        valor.classList.remove("erro","treme")
    }, 300)

    return
}

    // conversão
    if (tipo === "segundos") {
        totalsegundos = valornumero
    } else if (tipo === "minutos") {
        totalsegundos = valornumero * 60
    } else if (tipo === "horas") {
        totalsegundos = valornumero * 3600
    } else if (tipo === "dias") {
        totalsegundos = valornumero * 86400
    }

    clearInterval(intervalo)

    // mostra imediatamente
    atualizarTempo(totalsegundos)

    intervalo = setInterval(() => {
        if (totalsegundos <= 0) {
            clearInterval(intervalo)
            return
        }

        totalsegundos--

        atualizarTempo(totalsegundos)

    }, 1000)
})