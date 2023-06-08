import movEnimigo from "./comportamentoEnimigo.js";
import controlesPersonagem from "./heroi.js";
import blocosDano from "./blocosDano.js"
import porrete from "./porrete.js";

let comandoAtq

const ColisaoEnimigo = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{

    if((Math.abs(posiHeroiX - enimigoX) < 42) &&
    ((Math.abs(posiHeroiY  - enimigoY) < 5)))
    {
        controlesPersonagem.setDano(true)
    }
}

const blocoPorrete = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{


    if((Math.abs(posiHeroiX + 60 - enimigoX-50)  < 50) &&
    ((Math.abs(posiHeroiY+20 - enimigoY-30) < 20)))
    {
        porrete.desaparecePorrete()
        controlesPersonagem.settHeroiComPorrete(true)
    }

}


const blocoColisaoDano = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{


    if((Math.abs(posiHeroiX + 40 - enimigoX - 3)  < 50) &&
    ((Math.abs(posiHeroiY - enimigoY - 3) < 17)))
    {
        controlesPersonagem.setDano(true)
    }

}

const blocoColisaoCortinaFogo = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{

    if((Math.abs(posiHeroiX + 40 - enimigoX - 3)  < 50) &&
    ((Math.abs(posiHeroiY - enimigoY - 3) < 30)))
    {
        controlesPersonagem.setDano(true)
    }

}

const contatoAtq = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{
    if((Math.abs(posiHeroiX - 20 - enimigoX) < 90) &&
    ((Math.abs(posiHeroiY - 10 - enimigoY) < 20))&&
    (comandoAtq)&&(controlesPersonagem.gettHeroiComPorrete()))
    {
        {   
            movEnimigo.setDano(true)           
        }
    }  
}

setInterval(()=>{


    comandoAtq = controlesPersonagem.getAtq()
    blocoColisaoCortinaFogo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_blocoCF1(),blocosDano.getY_blocoCF1())

    blocoColisaoCortinaFogo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_blocoCF2(),blocosDano.getY_blocoCF2())

    blocoColisaoCortinaFogo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_blocoCF3(),blocosDano.getY_blocoCF3())

    blocoColisaoCortinaFogo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_blocoCF4(),blocosDano.getY_blocoCF4())

    blocoColisaoCortinaFogo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_blocoCF5(),blocosDano.getY_blocoCF5())
    
    blocoPorrete(controlesPersonagem.getX(),controlesPersonagem.getY(),
    porrete.getXPorrete(),porrete.getYPorrete())

    ColisaoEnimigo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    movEnimigo.getX(),movEnimigo.getY())

    contatoAtq(controlesPersonagem.getX(),controlesPersonagem.getY(),
    movEnimigo.getX(),movEnimigo.getY())

    
    blocoColisaoDano(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_bloco1(),blocosDano.getY_bloco1())

    blocoColisaoDano(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_bloco2(),blocosDano.getY_bloco2())

    blocoColisaoDano(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_bloco3(),blocosDano.getY_bloco3())

    controlesPersonagem.novoDanoNoHeroi()
    movEnimigo.novoDanoNoEnimigo()

},10);


export default {}