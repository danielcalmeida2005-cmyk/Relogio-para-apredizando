const timerEl = document.getElementById("timer");
const marksList = document.getElementById("marks-list");

let intervalid = 0;
let timer = 0;
let marks = [];

// roda tempo
const formattime = (time) =>{
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000)/6000)
    const segunds = Math.floor((time % 6000)/100)

    return `${hours.toString().padStart(2,'0')}:${
        minutes.toString().padStart(2,'0')
    }:${segunds.toString().padStart(2,'0')}`
}

// fim de roda tempo


//  adiciona
const addmarkstoList =(marksindex,markTime) => {
    marksList.innerHTML += `<p>marca</p> ${marksindex}: ${formattime(markTime)}`
}
const martime = () =>{
    marks.push(timer)
    addmarkstoList(marks.length,timer)
}

// fim Adiciona

// botao de acao do tempo
const toggleTimer =  () =>{
    const button = document.getElementById('power')
    const action = button.getAttribute('action') // 

    clearInterval(intervalid)

    if(action == 'start' || action == 'continue'){
        intervalid = setInterval(()=>{
            timer += 1;
            setTimer(timer);
        },10);

        button.setAttribute('action','pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }
    else if(action == 'pause'){
        button.setAttribute('action','continue')
        button.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}
// fim da botao

// reset Timer
const  resetTimer = () =>{
clearInterval(intervalid)
timer = 0
setTimer(timer)
 const button = document.getElementById('power')
  button.getAttribute('action','start') 
   button.innerHTML = '<i class="fa-solid fa-play"></i>'
}
const setTimer =(time) => {
    timerEl.innerText = formattime(time);
}

document.getElementById('power').addEventListener('click', toggleTimer)
document.getElementById('mark').addEventListener('click', martime)
document.getElementById('reset').addEventListener('click', resetTimer)