import blocosDano from "./blocosDano.js";
import controlesPersonagem from "./heroi.js";
import movEnimigo from "./comportamentoEnimigo.js";



let principal = document.getElementsByClassName("arena")[0]
let lista = principal.getElementsByTagName("div")
let principal2 = document.getElementsByClassName("arena2")[0]
let lista2 = principal2.getElementsByTagName("div")

const figuraBlocoDano3 = document.getElementById("bloco3")
const heroizinho = document.getElementById("heoizinho")



const troca = ()=>{

   if((controlesPersonagem.getY()+10) < blocosDano.getY_bloco3()){
      principal2.insertBefore( figuraBlocoDano3,lista2[0] )
     }
     else{
      principal2.insertBefore( figuraBlocoDano3,lista2[-1] )
     } 

   if(controlesPersonagem.getY() > movEnimigo.getY()){
    principal.insertBefore( heroizinho,lista[0] )
   }
   else{
    principal.insertBefore( heroizinho,lista[-1] )
   }  

}

setInterval(()=>{
   
   troca()
  
},50);


export default{}