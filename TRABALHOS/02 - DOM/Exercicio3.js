function zoomOut() {
    var imagens = [];
    var classeAtual = '';
    var tamAtual = 0;

    imagens = document.getElementsByClassName('selecao')

    classeAtual = (imagens[0].className)
    tamAtual = parseInt(classeAtual.replace('selecao', ''))
    console.log('tamAtual :', tamAtual)

    if (tamAtual != 1) {
        tamAtual--
        for (let i=0; i<imagens.length; i++) 
            imagens[i].className = 'selecao' + tamAtual
    }
}