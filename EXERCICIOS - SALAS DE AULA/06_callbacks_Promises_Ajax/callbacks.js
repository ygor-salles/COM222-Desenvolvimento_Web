//Contagem de cliques dos botões
let contador = 0
$(document).ready(() => {
    $('#click-callback').click(() => {
        contador++
        $('#click-callback-result').text('Clicou: '+contador)
    })
})

/*#####################################################################################*/
//Fazendo com callback

function voltandoComCep(info){
    $('#click-callback-cep-result').text(info.localidade)
}

function buscaCep(){
    const inputCep = $('#click-callback-cep-input').val()
    $.get(`https://viacep.com.br/ws/${inputCep}/json/`, voltandoComCep)
}

$('#click-callback-cep').click(buscaCep)

/*#####################################################################################*/
//Fazendo com promise

function retornaCep(cep){
    return new Promise((resolve, reject) => {
        try{
            if (!cep.IsValid)
                resolve($.getJSON(`https://viacep.com.br/ws/${cep}/json/`))
        }
        catch(e) {
            reject(e)
        } 
    })
}

function pegaCep(){
    const cepInput = $('#click-callback-promise-cep-input').val()
    retornaCep(cepInput)
        .then(info => $('#click-callback-promise-cep-result').text(info.localidade))
        .catch(() => $('#click-callback-promise-cep-result').text('Cep Inválido'))
}

$('#click-callback-promise-cep').click(pegaCep)

/*#####################################################################################*/
//Fazendo com ajax

$(document).ready(() => {
    $('#button-ajax').click(() => {
        const inputCep = $('#input-ajax').val()
        const urlStr = `https://viacep.com.br/ws/${inputCep}/json/`

        $.ajax({
            url: urlStr,
            type: "get",
            dataType: "json",
            success: (info) => {
                $('#small-ajax').text(info.localidade)
            },
            error: (erro) => {
                $('#small-ajax').text('Cep inválido!')
            }  
        })
    })
})