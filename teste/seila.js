
let imagens = document.querySelectorAll(".opcoes img")
imagens.forEach(function(imagem){
    imagem.addEventListener("click",function(){
        let fundo = imagem.src

        document.body.style.backgroundImage = `url(${fundo})`

        document.body.style.backgroundSize = "cover"

        document.body.style.backgroundPosition = "center"

        document.body.style.backgroundRepeat = "no-repeat"
    })
})