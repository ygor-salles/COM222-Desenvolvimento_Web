
/*
    PARTE 1: O Javascript trabalha com tipagem dinamica. Assim, uma variável pode assumir qualquer valor.
*/
var umTexto = "Olá, sou um texto"
var umNumero = 10
var umaLista = [1, 2, 3]

console.log(umTexto);
// outuput: "Olá sou um texto"

console.log(umNumero);
// outuput: 10

console.log(umaLista);
// outuput: [1, 2, 3]
console.log(umaLista[0]);
// outuput: 1


var umaFuncaoQueDizOi = function(){
    console.log("Sou a função que diz Oi !!!")
}

umaFuncaoQueDizOi();
// output: Sou a função que diz Oi !!!

/**
 * Assim como qualquer função em qualquer linguagem de programação
 * é possivel passar parametros
 */

 var umaFuncaoQueFazSoma = function (a, b) {
    return a + b;
 }

 console.log(umaFuncaoQueFazSoma(68, 55));
 // Output: 123 (68 + 55)


/**
 * Função como parametros
 */

 var funcaoA = function(callback) {
    console.log("Estou usando a função A");
    callback();
 }

 var funcaoB = function() {
    console.log("Estou usando a função B");
 }

 funcaoA(funcaoB);
 // Estou usando a função A
 // Estou usando a função B





