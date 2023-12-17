//DOM
let quantity1=document.querySelector("#q1")
let quantity2=document.querySelector("#q2")
let quantity3=document.querySelector("#q3")
let result=document.querySelector("#msg")
const show=document.querySelector("#btn")

//VARIABLES


//FUNCIONES
function calculate(){
    console.log("click click")
    const value1=quantity1.value
    const value2=quantity2.value
    const value3=quantity3.value

    let totalvalue=Number(value1)+Number(value2)+Number(value3)
    console.log(totalvalue)
    
    if (totalvalue<=10) {
        result.innerHTML='"LLEVAS '+totalvalue+' STICKERS"'
    } else {
        result.innerHTML='"LLEVAS DEMASIADOS STICKERS"'
    }
}


//EVENTOS
show.addEventListener("click",calculate)