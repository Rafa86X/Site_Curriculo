import controlesPersonagem from "./heroi.js"

const enimigo = document.getElementById("enimigo")
let novaPosição
let alvoX
let alvoY
let posiX
let posiY
let ativado=false
let vidaEnimigo = 100
let tempoNovoDanoE = 0
let travaDanoE = false
let velocidade
let fugindo = false
let pause = false
let posiXini = 630
let posiYini = 80
let velo_setada = 1
let bloqueadoPeloControlador = false
let ini=false

const iniGeral = () =>{

    if(!ini){
        pause = true
        ini = true
    }

}

const getPosicaoInicial = () =>{
   return ((getX()==posiX)&&(getY()==posiYini)) ? true : false
}

const liberaNovoDanoEnimigo = ()=>{
    bloqueadoPeloControlador = false
}
const getAconteceuDano = () =>{
    return bloqueadoPeloControlador
}

const getVidaEnimigo = ()=>{
    return vidaEnimigo
}
const getX = () =>{
    return parseInt(window.getComputedStyle(enimigo).left)
}
const getY = () =>{
    return parseInt(window.getComputedStyle(enimigo).bottom)
}
const setDano = (set) =>{
    travaDanoE = set
}

const setPause = (set)=>{
    pause = set
}

const getPause = () =>{
    return pause
}

const setVelocidade = (set) =>{
    velo_setada = set
}

const novoDanoNoEnimigo = ()=>{

    if(!bloqueadoPeloControlador){
        if((tempoNovoDanoE==0)&&(travaDanoE)&&(vidaEnimigo>0)){
            vidaEnimigo = vidaEnimigo - 20
        }
        if(travaDanoE){
                if(tempoNovoDanoE<80){
                    tempoNovoDanoE++
                    ((tempoNovoDanoE % 5 === 0)||(tempoNovoDanoE % 2 === 0)) ? enimigo.style.visibility = 'hidden': enimigo.style.visibility = 'visible';
                    tempoNovoDanoE > 100 ? tempoNovoDanoE = 0: tempoNovoDanoE           
                }
                
            else{
                tempoNovoDanoE = 0
                travaDanoE = false
                enimigo.style.visibility = 'visible';
                bloqueadoPeloControlador = true
            }
        }
    }

}

const recomeca = ()=>{
    if(pause){
        ativado = true
    }
    if((posiX == posiXini )&&(posiY==posiYini)&&(fugindo==true)){
            ativado = false
            fugindo = false
    }
    
}



const tomouDano =()=>{
    if(travaDanoE){
        fugindo = true
    }

    if(fugindo){
        velocidade = (alvoX - posiX < 10) ? velocidade = velo_setada : velocidade = velo_setada*3
        alvoX = posiXini
        alvoY = posiYini

    }else{
        alvoX = controlesPersonagem.getX()
        alvoY = controlesPersonagem.getY()
        velocidade = velo_setada 
    }

}



const mov = () =>{
    if(ativado){
        
        if(alvoX < posiX){
            novaPosição = posiX - velocidade
            enimigo.style.left = novaPosição +"px"
        }  
        if(alvoX > posiX){
            novaPosição = posiX + velocidade
            enimigo.style.left = novaPosição +"px"
        }    
        if(alvoY < posiY){
            novaPosição = posiY - velocidade
            enimigo.style.bottom = novaPosição +"px"
        }    
        if(alvoY > posiY){
            novaPosição = posiY + velocidade
            enimigo.style.bottom = novaPosição +"px"
        }  
    }
}   

const corregedorDeEscala = () =>{
    
    if(!fugindo){
        if(controlesPersonagem.getX()>getX())
            enimigo.style.transform = 'scaleX(1)'
        else
            enimigo.style.transform = 'scaleX(-1)'
    }
    else
        enimigo.style.transform = 'scaleX(1)'
}

    const animacao = () =>{

        if(vidaEnimigo>0){
            if(ativado){
                if(velocidade>1)
                    enimigo.style.backgroundImage = 'url(./Gifs/enimigoCorrendoRapido.gif)'
                else
                    enimigo.style.backgroundImage = 'url(./Gifs/enimigoCorrendo.gif)'
            }
            else
                enimigo.style.backgroundImage = 'url(./Gifs/enimigoParado.gif)'
        }
        else{enimigo.style.visibility = 'hidden';}
        
    }


setInterval(()=>{
    animacao()
    corregedorDeEscala()
    posiX = getX()
    posiY = getY()
    mov()
    tomouDano()
    recomeca()
  
},20);

export default {
    getVidaEnimigo:getVidaEnimigo,
    novoDanoNoEnimigo:novoDanoNoEnimigo,
    getX:getX,
    getY:getY,
    setDano:setDano,
    setPause:setPause,
    liberaNovoDanoEnimigo:liberaNovoDanoEnimigo,
    getAconteceuDano:getAconteceuDano,
    getPosicaoInicial:getPosicaoInicial,
    getPause:getPause,
    setVelocidade:setVelocidade,
    iniGeral:iniGeral
}