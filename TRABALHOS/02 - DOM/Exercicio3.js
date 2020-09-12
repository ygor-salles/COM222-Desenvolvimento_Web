function zoomOut() {
    const arrayFoto = document.querySelectorAll('[foto]')
    const foto = document.querySelector('[foto]') 
    if (foto.className == '')
        arrayFoto.forEach(i => {
        i.classList.add('img150')
    })
    else if (foto.className == 'img50')
        arrayFoto.forEach(i => {
            i.classList.remove('img50')
        })
}

function zoomIn() {
    const arrayFoto = document.querySelectorAll('[foto]')
    const foto = document.querySelector('[foto]') 
    if (foto.className == '')
        arrayFoto.forEach(i => {
        i.classList.add('img50')
    })
    else if (foto.className == 'img150')
        arrayFoto.forEach(i => {
            i.classList.remove('img150')
        })
}