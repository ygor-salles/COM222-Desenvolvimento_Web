
/**
 * Exemplo callback click
 */
var QuandoClicarEmMinContador = 0;

function QuandoClicarEmMim(){
    console.log("Você clicou em mim !!!");
    QuandoClicarEmMinContador++;
    $("#click-callback-result").text("Você clicou em mim " + QuandoClicarEmMinContador + " vezes !!!");
}

$("#click-callback").click(QuandoClicarEmMim)


/**
 * Exemplo cep
 */
 var Logradouro;
 
function QuandoVoltarComOCep (info) {

    // preenchendo nossa variavel
    Logradouro = info.logradouro;
    
    // marcando a hora da 
    console.log("chegou !!! ", new Date());


    $("#click-callback-cep-result").text(Logradouro);
}

function BuscarCep(){

    // estetica
    console.log("----------------------------------");
    
    // tirando o resultado anterior
    Logradouro = null;
    $("#click-callback-cep-result").text(Logradouro);

    // Lendo o que o usuario preencheu no input
    var cep = $("#click-callback-cep-input").val();

    // marcando a hora que chamamos a API
    console.log("antes ", new Date());

    // indo buscar os dados do CEP e chamando a função
    $.getJSON("https://viacep.com.br/ws/" + cep + "/json/", QuandoVoltarComOCep);

    // imediatamente após a chamada
    console.log("depois ", new Date());

    // ainda deve ser null
    console.log("Logradouro ", Logradouro);

}

$("#click-callback-cep").click(BuscarCep)

// má prática
// $("#click-callback-cep").click(function () {
//     console.log("função anonima");
// });


/**
 * Exemplo Promise
 */

 var LogradouroPromise;
 
 function QuandoVoltarComOCepPromise (info) {
 
     // preenchendo nossa variavel
     LogradouroPromise = info.logradouro;
     
     // marcando a hora da 
     console.log("chegou !!! ", new Date());
 
     $("#click-callback-promise-cep-result").text(LogradouroPromise);
 }

function GetCep(cep) {
    return new Promise(function (resolve, reject) {
        $.getJSON("https://viacep.com.br/ws/" + cep + "/json/", resolve, reject);
    });
}

function BuscarCepPromise(){

    // estetica
    console.log("----------------------------------");
    
    // tirando o resultado anterior
    LogradouroPromise = null;
    $("#click-callback-promise-cep-result").text(LogradouroPromise);

    // Lendo o que o usuario preencheu no input
    var cep = $("#click-callback-promise-cep-input").val();

    // marcando a hora que chamamos a API
    console.log("antes ", new Date());

    // indo buscar os dados do CEP e chamando a função
    GetCep(cep)
        .then(QuandoVoltarComOCepPromise);

    // imediatamente após a chamada
    console.log("depois ", new Date());

    // ainda deve ser null
    console.log("LogradouroPromise ", LogradouroPromise);

}


$("#click-callback-promise-cep").click(BuscarCepPromise)