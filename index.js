let section =document.querySelector("main")
section.addEventListener('click',selectDiv)

function selectDiv(e){
    if (e.target.tagName ==='DIV'){
        console.log(e.target.id)
    }
}

let section =document.querySelector("main")
section.addEventListener('click',select)

function select(e){
    if (e.target.tagName ==='DIV'){
        console.log(e.target.id)
    }
}