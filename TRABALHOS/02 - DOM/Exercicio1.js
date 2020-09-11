function verificaOutraColuna(cor) {
    const celula = document.getElementsByClassName(cor);
    if (celula[0].style.backgroundColor == cor)
        return true
    else
        return false
}

function azul() {
    if(!verificaOutraColuna('green')){
        const celula = document.getElementsByClassName('blue')
        for (let i = 0; i < celula.length; i++) 
            celula[i].style.backgroundColor = 'blue'
    }
}

function verde() {
    if(!verificaOutraColuna('blue')){
        const celula = document.getElementsByClassName('green')
        for (let i = 0; i < celula.length; i++) 
            celula[i].style.backgroundColor = 'green'
    }
}
