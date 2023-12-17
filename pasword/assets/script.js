//DOM
let k1=document.querySelector("#key1")
let k2=document.querySelector("#key2")
let k3=document.querySelector("#key3")
const button=document.querySelector("#btn")
let show=document.querySelector("#msg")

//VARIABLES
const pass1="911"
const pass2="714"


//FUNCIONES
function enterkey() {
    console.log("click click")
    dig1=key1.value
    dig2=key2.value
    dig3=key3.value

    password=dig1+dig2+dig3
    console.log(password)

    if (password==pass1) {
        show.innerHTML='PASSWORD  1  CORRECTO'
        show.style.backgroundColor="green"
    } else {if (password==pass2) {
        show.innerHTML='PASSWORD  2  CORRECTO'
        show.style.backgroundColor="green"
    } else {
        show.innerHTML="PASSWORD  INCORRECTO"
        show.style.backgroundColor="red"
    }
    
    }

}

//EVENTOS
button.addEventListener("click",enterkey)