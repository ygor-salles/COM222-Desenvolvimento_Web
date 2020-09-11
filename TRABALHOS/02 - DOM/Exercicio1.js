function azul() {
    const celula = document.getElementsByClassName('blue')
    for (let i = 0; i < celula.length; i++) {
        celula[i].style.backgroundColor = 'blue'
    }
    return true
}

function verde() {
    const celula = document.getElementsByClassName('green')
    for (let i = 0; i < celula.length; i++) {
        celula[i].style.backgroundColor = 'green'
    }
    return true
}
