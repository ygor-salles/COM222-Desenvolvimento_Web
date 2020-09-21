function executa(event) {
    const image = event.currentTarget
    image.src = 'Images/star_on.gif'
    image.removeEventListener('click', executa)

    contador += 1
    h4.textContent = `Estrelas acesas: ${contador}`
}

const image = document.querySelectorAll('img')
let contador = 0
let h4 = document.createElement('h4')
image.forEach(i => {
    i.addEventListener('click', executa)
})
const body = document.querySelector('body')
body.appendChild(h4)