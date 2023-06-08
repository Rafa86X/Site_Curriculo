const heroizinho = document.getElementById("heoizinho")


let vidaHeroi = 50
let tempoNovoDanoH = 0
let tempoAnimaDano = 0
let travaDanoH = false
let heroizinhoPositionX
let heroizinhoPositionY
var funcao = ''
let novaPosição
let ataque = false
let tempoAtq = 0
let heroiComPorrete = false
let pause = false
let heroiVenceu = false

const setPause=(set)=>{
  pause = set
}
const getPause=()=>{
  return pause
}
const setDano = (set) =>{
  travaDanoH = set
}
const getVidaHeroi = ()=>{
  return vidaHeroi
}
const gettHeroiComPorrete = ()=>{
     return heroiComPorrete
}

const settHeroiComPorrete = (set)=>{
     heroiComPorrete = set
}
const getX = () =>{
    return parseInt(window.getComputedStyle(heroizinho).left)
}
const getY = () =>{
    return parseInt(window.getComputedStyle(heroizinho).bottom)
}


const getAtq = ()=>{
  return ataque
}


const atacando = ()=>{

  if((ataque)&&(heroiComPorrete)&&(pause)&&(vidaHeroi>0)&&(!heroiVenceu)){
    heroizinho.style.backgroundImage = 'url(./Gifs/HeroiAtacando.gif)'
  }

}

const heroiMorreu = () =>{

      if(vidaHeroi<=0){
        heroizinho.style.visibility = 'visible';
        heroizinho.style.backgroundImage = 'url(./Gifs/morreu.gif)'
      }
}

const venceu = () => {
    heroiVenceu = true
    heroizinho.style.backgroundImage = 'url(./Gifs/heroiVenceu.gif)'
}

const novoDanoNoHeroi = ()=>{

  if((pause)&&(vidaHeroi>0)&&(!heroiVenceu)){
    if((tempoNovoDanoH==0)&&(travaDanoH)&&(vidaHeroi>0)){
        vidaHeroi = vidaHeroi - 10
    }
  
    if(travaDanoH){
        tempoAnimaDano++
        ((tempoAnimaDano % 5 === 0)||(tempoAnimaDano % 2 === 0)) ? heroizinho.style.visibility = 'hidden': heroizinho.style.visibility = 'visible';
        tempoAnimaDano > 100 ? tempoAnimaDano = 0: tempoAnimaDano
        if(tempoNovoDanoH<40){
            tempoNovoDanoH++
  
        }else{
            tempoNovoDanoH = 0
            travaDanoH = false
            heroizinho.style.visibility = 'visible';
        }
    }
  }
}

const movimantando = () =>{

      if((pause)&&(vidaHeroi>0)&&(!heroiVenceu)){
          heroizinhoPositionX = getX()
          heroizinhoPositionY = getY()
          
          if(((funcao=='l')||(funcao == 'r')||(funcao == 'u')||(funcao == 'd'))&&(funcao != 'a')){
      
            heroiComPorrete ? heroizinho.style.backgroundImage = 'url(./Gifs/HeroiCorrendoPorrete.gif)': heroizinho.style.backgroundImage = 'url(./Gifs/HeroiCorrendo.gif)'
          }
          else{
            heroiComPorrete ? heroizinho.style.backgroundImage = 'url(./Gifs/HeroiParadoPorrete.gif)' : heroizinho.style.backgroundImage = 'url(./Gifs/HeroiParado.gif)'
          }
      
          if ((funcao == 'l')&&(heroizinhoPositionX>1)){  
        
            novaPosição = heroizinhoPositionX - 2
            heroizinho.style.left = novaPosição +"px"
            heroizinho.style.transform = 'scaleX(-1)'
          }
          if ((funcao == 'r')&&(heroizinhoPositionX<580)){
            novaPosição = heroizinhoPositionX + 2
            heroizinho.style.left = novaPosição +"px"
            heroizinho.style.transform = 'scaleX(1)'
          }
          if ((funcao == 'u')&&(heroizinhoPositionY<170)){      
            novaPosição = heroizinhoPositionY + 2
            heroizinho.style.bottom = novaPosição +"px"
          }
          if ((funcao == 'd')&&(heroizinhoPositionY>5)){
            novaPosição = heroizinhoPositionY - 2
            heroizinho.style.bottom = novaPosição +"px"
          }
      
          if (funcao == 'a'){
            ataque = true;
          }
      
          if((ataque)&&(tempoAtq<40)){
              tempoAtq++
            }
            else{
              ataque = false
              tempoAtq = 0
            }
        }
      

}

setInterval(()=>{

    heroiMorreu()
    movimantando()
    atacando()

},10);


document.addEventListener('keyup', function(e) {
  const key = e.key;
            funcao = ''  
});


document.addEventListener('keydown', function(e) {
    const key = e.key;
    
    if(e.key == "ArrowLeft"){
        funcao = 'l'
    }
    if(e.key == "ArrowRight"){
        funcao = 'r'
    }
    if(e.key == "ArrowUp"){
        funcao = 'u'
    }
    if(e.key == "ArrowDown"){
        funcao = 'd'
    }
    if(e.key == "a"){
      funcao = 'a'
  }


});


export default {
    setDano:setDano,
    getVidaHeroi:getVidaHeroi,
    novoDanoNoHeroi:novoDanoNoHeroi,
    getX:getX,
    getY:getY,
    getAtq:getAtq,
    settHeroiComPorrete:settHeroiComPorrete,
    gettHeroiComPorrete:gettHeroiComPorrete,
    setPause:setPause,
    getPause:getPause,
    venceu:venceu
}