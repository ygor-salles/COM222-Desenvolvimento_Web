function transfere() {
    const inputs = document.getElementsByTagName('input')
    const li = []
    const  ol = document.createElement('ol')
    for (let i=0; i<inputs.length; i++){
        li[i] = document.createElement('li')
        li[i].innerHTML = inputs[i].value
        inputs[i].value = ''
        ol.appendChild(li[i])
    }
    const div = document.getElementById('resultado')
    div.appendChild(ol)
}