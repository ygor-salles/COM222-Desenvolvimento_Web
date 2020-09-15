function processar(event) {
    const estrelas = document.querySelectorAll('img')
    if (event.currentTarget.value == 'Acender'){
        estrelas.forEach(estrela => {
            estrela.src = 'Images/star_on.gif'
            estrela.removeEventListener('click', processar)
        })
        event.currentTarget.value = 'Apagar'
    }
    else{
        estrelas.forEach(estrela => {
            estrela.src = 'Images/star_off.gif'
            estrela.removeEventListener('click', processar)
        })
        event.currentTarget.value = 'Acender'
    }
}

const button = document.querySelector('input')
button.addEventListener('click', processar)