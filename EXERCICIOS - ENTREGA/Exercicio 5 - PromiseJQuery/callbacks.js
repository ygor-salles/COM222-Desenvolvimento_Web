
//UTILIZANDO A PROMISE
function retornaIbge(ibge){
    return new Promise((resolve, reject) => {
        $.getJSON(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${ibge}`, resolve, reject)
    })
}

function retornaCep(cep) {
    return new Promise((resolve, reject) => {
        try {
            if (!cep.IsValid)
                resolve($.getJSON(`https://viacep.com.br/ws/${cep}/json/`))
        }
        catch (e) {
            reject(e)
        }
    })
}

function pegaCep() {
    const cepInput = $('#click-callback-promise-cep-input').val()
    retornaCep(cepInput)
        .then(info => {
            console.log(info)
            retornaIbge(info.ibge)
                .then(resultado => $('#click-callback-promise-cep-result').html(
                    `Cidade: ${info.localidade}. <b>Fica no ${resultado.microrregiao.mesorregiao.UF.regiao.nome}</b>`
                ))
        })
        .catch(() => $('#click-callback-promise-cep-result').text('Cep Inválido'))
}

$('#click-callback-promise-cep').click(pegaCep)