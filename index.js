let clicks =[]
let section =document.querySelector("main")
section.addEventListener('click',saveClick)

function saveClick(e){
    
    console.log(clicks)
    clicks.push(e.target.id)
    if (clicks.length===2){
        mover(clicks[0],clicks[1])
        clicks =[]
    }
}

function mover(a,b){
    
    origem = document.getElementById(a);
    destino = document.getElementById(b);
    element = origem.lastElementChild;
    destino.append(element);
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
