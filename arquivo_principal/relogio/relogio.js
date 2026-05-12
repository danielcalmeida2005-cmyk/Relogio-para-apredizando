// Horas
let hora = document.getElementById("horas")
let minuto = document.getElementById("minutos")
let segundo = document.getElementById("segundos")


let horario =  setInterval(function time(){let agora = new Date()

let hr = agora.getHours()
let min = agora.getMinutes()
let seg = agora.getSeconds()

if (hr < 10) {
    hr = "0" + hr
}

if (min < 10) {
    min = "0" + min
}

if (seg< 10) {
seg = "0" +seg
}

hora.textContent =  hr
minuto.textContent = ": " + min
segundo.textContent = ": " + seg

// fim das horas


//Data
let dia = document.getElementById("dia")
let mes = document.getElementById("mes")
let ano = document.getElementById("ano")

let Data = new Date

let day = Data.getDate()
let month = Data.getMonth() + 1
let years = Data.getFullYear()


dia.textContent =  day
mes.textContent = month
ano.textContent = years})