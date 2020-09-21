function processar(event) {
    const estrelas = document.querySelectorAll('img')
    estrelas.forEach(estrela => {
        estrela.src = 'Images/star_on.gif'
        estrela.removeEventListener('click', processar)
    })
    event.currentTarget.value = 'Aceso'
}

const button = document.querySelector('input')
button.onclick = processar