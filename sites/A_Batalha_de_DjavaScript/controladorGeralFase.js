import controlesPersonagem from "./heroi.js";
import movEnimigo from "./comportamentoEnimigo.js";
import porrete from "./porrete.js";
import blocosDano from "./blocosDano.js";
import heroi from "./heroi.js";

let tempo=0
let jogando = true
let pegaHeroi_Z = [false,false,false,false,false]
let fazeExecutada = [false,false,false,false,false]

const tempoParaAcelerarEnimigo = ()=>{

    if(heroi.getPause()){
        if(tempo<2000){
            tempo++
            }
        else{
            movEnimigo.setVelocidade(3)
            }
    }
 }


const pegaHeroi = (v_Enimigo,indice)=>{

    if((movEnimigo.getVidaEnimigo() == v_Enimigo)&&(movEnimigo.getPause())){
        if(!movEnimigo.getAconteceuDano()){
            pegaHeroi_Z[indice]=true
            tempoParaAcelerarEnimigo()
        }
        else{
            movEnimigo.setPause(false)
            blocosDano.setDinamica_X(false)
            tempo = 0
            movEnimigo.setVelocidade(1)
        }
    }
}

const fases = () =>{
    if(((movEnimigo.getVidaEnimigo()==80)&&(pegaHeroi_Z[0])&&(!fazeExecutada[0]&&
        (movEnimigo.getPosicaoInicial())))){
            controlesPersonagem.settHeroiComPorrete(false)
            blocosDano.setFaseIniciada(true,0)
            if(blocosDano.getFaseFinalizada(0)){
                porrete.reaparece()
                movEnimigo.liberaNovoDanoEnimigo()
                fazeExecutada[0]=true
                movEnimigo.setPause(true)                
            }
     }

     if(((movEnimigo.getVidaEnimigo()==60)&&(pegaHeroi_Z[1])&&(!fazeExecutada[1]&&
        (movEnimigo.getPosicaoInicial())))){
            controlesPersonagem.settHeroiComPorrete(false)
            blocosDano.setFaseIniciada(true,1)
            if(blocosDano.getFaseFinalizada(1)){
                porrete.reaparece()
                movEnimigo.setPause(true)
                movEnimigo.liberaNovoDanoEnimigo()
                blocosDano.setDinamica_X(true)
                fazeExecutada[1]=true
                
            }
     }

     if(((movEnimigo.getVidaEnimigo()==40)&&(pegaHeroi_Z[2])&&(!fazeExecutada[2]&&
        (movEnimigo.getPosicaoInicial())))){
            controlesPersonagem.settHeroiComPorrete(false)
            blocosDano.setFaseIniciada(true,2)
            if(blocosDano.getFaseFinalizada(2)){
                porrete.reaparece()
                movEnimigo.setPause(true)
                movEnimigo.liberaNovoDanoEnimigo()
                blocosDano.setDinamica_X(true)
                fazeExecutada[2]=true
               
            }
     }

     if(((movEnimigo.getVidaEnimigo()==20)&&(pegaHeroi_Z[3])&&(!fazeExecutada[3]&&
        (movEnimigo.getPosicaoInicial())))){
            controlesPersonagem.settHeroiComPorrete(false)
            blocosDano.setFaseIniciada(true,3)
            if(blocosDano.getFaseFinalizada(3)){
                porrete.reaparece()
                movEnimigo.setPause(true)
                movEnimigo.liberaNovoDanoEnimigo()
                blocosDano.setDinamica_X(true)
                fazeExecutada[3]=true
               
            }
     }

     if((movEnimigo.getVidaEnimigo()<=0)||(heroi.getVidaHeroi()<=0)){
            heroi.setPause(false)
            blocosDano.setPause(false)
            movEnimigo.setVelocidade(0)

            if(movEnimigo.getVidaEnimigo()<=0){
                document.getElementById("painelIni").style.backgroundImage = 'url(./Imagens/painelVenceu.png)'
                heroi.venceu()
            }
            if(heroi.getVidaHeroi()<=0){
                document.getElementById("painelIni").style.backgroundImage = 'url(./Imagens/painelMorreu.png)'
            }
            document.getElementById("painelIni").style.visibility = 'visible'
            }
    


}

setInterval(()=>{
    if(jogando){
        pegaHeroi(100,0)
        pegaHeroi(80,1)
        pegaHeroi(60,2)
        pegaHeroi(40,3)
        pegaHeroi(20,4)
        fases()
    }

},10);


const f_iniPause = () =>{
    if((movEnimigo.getVidaEnimigo()>0)&&(heroi.getVidaHeroi()>0)){
        if(heroi.getPause()==false){
            movEnimigo.iniGeral()
            heroi.setPause(true)
            blocosDano.setPause(true)
            movEnimigo.setVelocidade(1)
            document.getElementById("painelIni").style.visibility = 'hidden'
        }
        else{
            heroi.setPause(false)
            blocosDano.setPause(false)
            movEnimigo.setVelocidade(0)
            document.getElementById("painelIni").style.visibility = 'visible'  
        }                
    }
}

document.addEventListener('keydown', function(e) {
    const key = e.key;
    
    switch (e.key) {

        case "y":
            porrete.reaparece()
            break; 
           
        case "p":
            f_iniPause()
            break;  

        case "i":
            movEnimigo.setPause(false)
            heroi.setPause(false)
            break;

        case "u":
            controlesPersonagem.settHeroiComPorrete(false)
            break;
        case "t":
            movEnimigo.setVelocidade(0)
            break;  
        case "e":
            jogando=false
            break;        
     }
});

export default{}