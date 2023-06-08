import heroi from "./heroi.js"

const porrete = document.getElementById("porrete")

let novaPosição
const getXPorrete = () =>{
    return parseInt(window.getComputedStyle(porrete).left)
  }
const getYPorrete = () =>{
    return parseInt(window.getComputedStyle(porrete).bottom)
  }

const desaparecePorrete = ()=>{
    porrete.style.visibility = 'hidden'
    porrete.style.left = 1000 + 'px'
    porrete.style.bottom = 1000 + 'px'
}

const reaparece = () =>{
    do{
    porrete.style.visibility = 'visible'
    novaPosição = Math.floor(Math.random() * 480);
    porrete.style.left = novaPosição +"px"
    novaPosição = Math.floor(Math.random() * 70);
    porrete.style.bottom = novaPosição +"px"}
    while((Math.abs(heroi.getX()-getXPorrete()))<100)
}



export default {   getXPorrete:getXPorrete,
                   getYPorrete:getYPorrete,
                   desaparecePorrete:desaparecePorrete,
                   reaparece:reaparece
               }