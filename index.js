let clicks =[]
let countMove = 0
let container =document.querySelector("main")
let header = document.querySelector('header')
let counter =document.createElement('span')
let tempoInicial = 0
let arrS =['esquerda','centro', 'direita']
let arrD = ['quarto','terceiro','segundo','primeiro']
let button =document.querySelector('#iniciar')

container.addEventListener('click',saveClick)

function criandoJogo(){
    // impede de chamar o começar jogo 2x
    if (container.childElementCount!==0){
        return
    }
    //cria session
    for (let i = 0;i<arrS.length;i++){
        let section = document.createElement('session')
        section.id = arrS[i]
        container.append(section)
    }
    //cria div
    for (let m=0;m<arrD.length;m++){
        let div =document.createElement('div')
        let esquerdo = document.querySelector('#esquerda')
        div.id = arrD[m]
        esquerdo.append(div)
    }
    //cria contador
    counter.innerText = 'Movimentos = ' + countMove
    header.append(counter)
    //
    button.classList.add('hidden')
    tempoInicial = Date.now()
}

function saveClick(e){
  
    clicks.push(e.target.id)
    console.log(clicks)
    if (clicks.length===2){
    mover(clicks[0],clicks[1])
    clicks =[];
    countMove+=1
    counter.innerText = 'Movimentos = ' + countMove
    }
    let vitoria = document.querySelector('#direita').childElementCount;
    if (vitoria === 4){
        let tempofinal = Date.now()
        let tempo = Math.round((tempofinal - tempoInicial)/1000)
        let parabens = document.createElement('p');
        parabens.innerText = `Parabéns, você conseguiu!! Agora tente fazer com 15 movimentos. Seu tempo de jogo foi  ${tempo} s`
        parabens.classList.add('parabens')
        container.append(parabens)
        
    }
}

function mover(a,b){
    let origem = document.getElementById(a);
    let destino = document.getElementById(b);
    let elemento = origem.lastElementChild;
    let elementoDestino = destino.lastElementChild;
    if (elemento === null){
        destino.append(elemento)
        return
    }
    if (elementoDestino === null){
        destino.append(elemento)
        return
    }
    elementoLargura = origem.lastElementChild.clientWidth;
    elementoDestino = destino.lastElementChild.clientWidth;
    if(elementoDestino>elementoLargura ){
        destino.append(elemento);
    }
}

function reset(){
    location.reload();
}

