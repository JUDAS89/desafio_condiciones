//DOM
const image = document.querySelector("#img")

//VARIABLES
let state=true

//FUNCIONES
function change(){
    console.log("click click")
    if (state==true) { 
        image.style.border="2px solid red"
        image.setAttribute("src","./assets/img/foco_encendido.png")
        state=false
    } else {
        image.style.border="none"
        image.setAttribute("src","./assets/img/foco_apagado.png")
        state=true
    }
}


//EVENTOS
image.addEventListener("click",change)