

const blocoCF1 = document.getElementById("blocoCF1")
const blocoCF2 = document.getElementById("blocoCF2")
const blocoCF3 = document.getElementById("blocoCF3")
const blocoCF4 = document.getElementById("blocoCF4")
const blocoCF5 = document.getElementById("blocoCF5")

const bloco1 = document.getElementById("bloco1")
const bloco2 = document.getElementById("bloco2")
const bloco3 = document.getElementById("bloco3")

let ciclo = [false,false,false] 
let PosiIniFases = [600,150,650,10,625,80]
let faseIniciada = [false,false,false,false,false]
let trava = [false,false,false,false,false]
let faseConcluida = [false,false,false,false,false]
let posicaoXbloco
let posicionado = false
let passo = [false,false,false]
let espera=0
let posicaoFormacao = []
let tempoDinamicaX=0
let dianmicaX_Ativada = false
let reposi =false
let pause = false

const setPause=(set)=>{
    pause = set
  }

const getX_blocoCF1 = () =>{
    return parseInt(window.getComputedStyle(blocoCF1).left)
}
const getY_blocoCF1 = () =>{
    return parseInt(window.getComputedStyle(blocoCF1).bottom)
}
const getX_blocoCF2 = () =>{
    return parseInt(window.getComputedStyle(blocoCF2).left)
}
const getY_blocoCF2 = () =>{
    return parseInt(window.getComputedStyle(blocoCF2).bottom)
}
const getX_blocoCF3 = () =>{
    return parseInt(window.getComputedStyle(blocoCF3).left)
}
const getY_blocoCF3 = () =>{
    return parseInt(window.getComputedStyle(blocoCF3).bottom)
}
const getX_blocoCF4 = () =>{
    return parseInt(window.getComputedStyle(blocoCF4).left)
}
const getY_blocoCF4 = () =>{
    return parseInt(window.getComputedStyle(blocoCF4).bottom)
}
const getX_blocoCF5 = () =>{
    return parseInt(window.getComputedStyle(blocoCF5).left)
}
const getY_blocoCF5 = () =>{
    return parseInt(window.getComputedStyle(blocoCF5).bottom)
}

const getX_bloco1 = () =>{
    return parseInt(window.getComputedStyle(bloco1).left)
}
const getY_bloco1 = () =>{
    return parseInt(window.getComputedStyle(bloco1).bottom)
}
const getX_bloco2 = () =>{
    return parseInt(window.getComputedStyle(bloco2).left)
}
const getY_bloco2 = () =>{
    return parseInt(window.getComputedStyle(bloco2).bottom)
}

const getX_bloco3 = () =>{
    return parseInt(window.getComputedStyle(bloco3).left)
}
const getY_bloco3 = () =>{
    return parseInt(window.getComputedStyle(bloco3).bottom)
}

const setFaseIniciada = (set,i) =>{
    faseIniciada[i] = set
}

const getFaseFinalizada = (i) =>{
    return faseConcluida[i]
}

const setDinamica_X = (set) =>{
    dianmicaX_Ativada = set
}



const formacao =(velocidade,posiforma)=>{

    if((!passo[0])&&(!passo[1])&&(!passo[2])){
        passo[0]=atitudeBloco(0,0,0,0,0,0,posiforma[0],posiforma[1],posiforma[2],velocidade)
               
    }
    if((passo[0])&&(!passo[1])&&(!passo[2])){
        passo[1]=atitudeBloco(0,0,0,-10,10,0,posiforma[3],posiforma[4],posiforma[5],velocidade) 
    }
    if((passo[0])&&(passo[1])&&(!passo[2])){
        passo[2]=atitudeBloco(0,0,0,0,0,0,posiforma[6],posiforma[7],posiforma[8],velocidade)        
    }
    if((passo[0])&&(passo[1])&&(passo[2])){
        return true        
    }
    else{
        return false
    }   

}

const atitudeBloco = (posiX1,posiX2,posiX3,posiY1,posiY2,posiY3,referencia1,referencia2,referencia3,velocidade) =>{

    if(!posicionado){
        bloco1.style.left = (PosiIniFases[0]+posiX1) + "px"
        bloco1.style.bottom = (PosiIniFases[1]+posiY1) + "px"
        bloco2.style.left = (PosiIniFases[2]+posiX2) + "px"
        bloco2.style.bottom = (PosiIniFases[3]+posiY2) + "px"
        bloco3.style.left = (PosiIniFases[4]+posiX3) + "px"
        bloco3.style.bottom = (PosiIniFases[5]+posiY3) + "px"
        espera=0
        posicionado = true
    }
    if(pause){
        espera++
        if((getX_bloco1()>-100)&&(espera>referencia1)){
            bloco1.style.left = (getX_bloco1() - velocidade ) + "px"
        }
    
        if((getX_bloco3()>-100)&&(espera>referencia2)){
            bloco3.style.left = (getX_bloco3() - velocidade ) + "px"
        }
    
        if((getX_bloco2()>-100)&&(espera>referencia3)){
            bloco2.style.left = (getX_bloco2() - velocidade ) + "px"
        }
        if((getX_bloco1()<=-100)&&(getX_bloco2()<=-100)&&(getX_bloco3()<=-100)){
            posicionado = false
            return true
        }
    }
       
    else
        return false

}

const movimentaBloco = (altura,bloco,velocidade, cicloX,cicloIndice)=>{
      
         posicaoXbloco = parseInt(window.getComputedStyle(bloco).left)
         bloco.style.bottom = altura + "px"
         if(posicaoXbloco >=550)
         cicloX= true
         if(posicaoXbloco <= 20)
         cicloX= false         

        if(pause){
            if((cicloX==false)&&(posicaoXbloco<550))
            {
                bloco.style.left = (posicaoXbloco + velocidade) + "px"
            }       
            if(cicloX==true)
            {
                bloco.style.left = (posicaoXbloco - velocidade) + "px"
            }
        }

        ciclo[cicloIndice] = cicloX

   
}


const dinamica_X = ()=>{

    if(dianmicaX_Ativada){
        bloco1.style.backgroundImage = 'url(./Gifs/fogoSombrio.gif)'
        bloco2.style.backgroundImage = 'url(./Gifs/fogoSombrio.gif)'
        bloco3.style.backgroundImage = 'url(./Gifs/fogoSombrio.gif)'
        reposi = false
        if(tempoDinamicaX<2){
            bloco1.style.left = (PosiIniFases[0]) + "px"
            bloco1.style.bottom = (PosiIniFases[1]) + "px"
            bloco2.style.left = (PosiIniFases[2]) + "px"
            bloco2.style.bottom = (PosiIniFases[3]) + "px"
            bloco3.style.left = (PosiIniFases[4]) + "px"
            bloco3.style.bottom = (PosiIniFases[5]) + "px"
        }
        movimentaBloco(80,bloco3,5,ciclo[2],2)
        movimentaBloco(10,bloco2,9,ciclo[1],1)
        movimentaBloco(150,bloco1,9,ciclo[0],0)

        if(tempoDinamicaX<=10){
            tempoDinamicaX++
        }
    }
    else{
        if(reposi==false){
            bloco1.style.backgroundImage = 'url(./Gifs/fogoNormal.gif)'
            bloco2.style.backgroundImage = 'url(./Gifs/fogoNormal.gif)'
            bloco3.style.backgroundImage = 'url(./Gifs/fogoNormal.gif)'
            bloco1.style.left = 800 + "px"
            bloco1.style.bottom = 800 + "px"
            bloco2.style.left = 800 + "px"
            bloco2.style.bottom = 800 + "px"
            bloco3.style.left = 800 + "px"
            bloco3.style.bottom = 800 + "px"
            reposi = true
        }
    }

}

const dinamica = (numeroDim,velocidade,i) =>{
   
    if((faseIniciada[i])&&(!trava[i])){
        posicionado = false
        passo = [false,false,false]
        trava[i]=true
    }
    if((trava[i])&&(!faseConcluida[i])){
        faseConcluida[i] = dinamica_X();
        if(numeroDim==1){
            posicaoFormacao = [10,30,40,10,30,10,40,20,0]
        }
        if(numeroDim==2){
            posicaoFormacao = [40,20,0,20,0,20,20,0,40]
        }
        if(numeroDim==3){
            posicaoFormacao = [60,0,30,0,20,40,10,30,50]
        }
        faseConcluida[i] = formacao(velocidade,posicaoFormacao)          
    }
}


setInterval(()=>{

    dinamica(1,5,0)
    dinamica(2,9,1)
    dinamica(3,11,2)
    dinamica(1,13,3)
    dinamica(2,13,4)
    dinamica_X()
   },30);



export default{ 
    getX_blocoCF1:getX_blocoCF1, getY_blocoCF1:getY_blocoCF1,
    getX_blocoCF2:getX_blocoCF2, getY_blocoCF2:getY_blocoCF2,
    getX_blocoCF3:getX_blocoCF3, getY_blocoCF3:getY_blocoCF3,
    getX_blocoCF4:getX_blocoCF4, getY_blocoCF4:getY_blocoCF4,
    getX_blocoCF5:getX_blocoCF5, getY_blocoCF5:getY_blocoCF5,
    getX_bloco1:getX_bloco1, getY_bloco1:getY_bloco1,
    getX_bloco2:getX_bloco2, getY_bloco2:getY_bloco2,
    getX_bloco3:getX_bloco3, getY_bloco3:getY_bloco3,
    setFaseIniciada:setFaseIniciada,
    getFaseFinalizada:getFaseFinalizada,
    setDinamica_X:setDinamica_X,
    setPause:setPause
}