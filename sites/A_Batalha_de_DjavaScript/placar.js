import controlesPersonagem from "./heroi.js";
import comportamentoEnimigo from "./comportamentoEnimigo.js";


const vidaHeroi = document.getElementById("vidaHeroi")
const vidaEnimigo = document.getElementById("vidaEnimigo")



setInterval(()=>{

    vidaHeroi.textContent = controlesPersonagem.getVidaHeroi()
    vidaEnimigo.textContent = comportamentoEnimigo.getVidaEnimigo()

},10);




export default {}