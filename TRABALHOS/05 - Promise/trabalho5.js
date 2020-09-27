function buscarClima(cidade){
    return new Promise((resolve, reject) => {
        try{
            resolve($.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=218ef51eef8a085b9d8d159587b5f4e9`))
        }
        catch (e){
            reject(e)
        }
    })
}


$(document).ready(() => {
    $('#button-pesquisar').click(() => {
        const inputCidade = $('#input-cidade').val()
        buscarClima(inputCidade)
            .then(clima => {
                console.log(clima) 
                const condicaoAtual = `<h3>${clima.weather[0].description}</h3>`
                const cidade = `<h2>${clima.name}</h2>`
                const temperatura = `<h1>${converteTemperatura(clima.main.temp)}°</h1>`
                const temperaturaMxm = `<h3>Max: ${converteTemperatura(clima.main.temp_max)}°</h3>`
                const temperaturaMin = `<h3>Min: ${converteTemperatura(clima.main.temp_min)}°</h3>`
                $('.condicaoAtual').append(condicaoAtual)
                $('.cidade').append(cidade)
                $('.temperaturaAtual').append(temperatura)
                $('.temperaturaMxm').append(temperaturaMxm)
                $('.temperaturaMin').append(temperaturaMin)
            })
            .catch(error => {
                alert('Houve erro na requisição!')
            })      
    })
})

function converteTemperatura(kelvin){
    const celcius = kelvin - 273.15
    return parseFloat(celcius.toFixed(2))
}