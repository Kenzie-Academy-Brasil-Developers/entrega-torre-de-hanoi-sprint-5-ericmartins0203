let clicks =[]
let countMove = 0
let container =document.querySelector("main")
let header = document.querySelector('header')
let counter =document.createElement('span')
container.addEventListener('click',saveClick)


function criandoJogo(){
    let container =document.querySelector("main")
    let arrS =['esquerda','centro', 'direita']
    let arrD = ['quarto','terceiro','segundo','primeiro']

    for (let i = 0;i<arrS.length;i++){
        let section = document.createElement('session')
        section.id = arrS[i]
        container.append(section)
    } 
    for (let m=0;m<arrD.length;m++){
        let div =document.createElement('div')
        let esquerdo = document.querySelector('#esquerda')
        div.id = arrD[m]
        esquerdo.append(div)
    }
    
    counter.innerText = 'Movimentos = ' + countMove
    header.append(counter)


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
        alert('Parabéns, você conseguiu!!');

        // location.reload();
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


/*se o e.targt.id !== null  
  
*/

/*selecionar session de origem
  selecionar session final
  verificar se existe div dentro da session
  se existir, verificar width da div
  se div movida tiver width menor, mover a div
  do contrario, nada se move
*/ 

/*
condição de finalização
a torre tem q se forçar na session da direita com todas as divs
querySeletor(#direito > 'div').length===4
chamar verificar a cada movimento
*/
