// ## FUNÇÃO FILTER - filtra elementos de um array - geralmente retorna um array menor ##
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const produtoFragil = produto => produto.fragil==true
const produtoCaro = produto => produto.preco>500

console.log(produtos.filter(produtoFragil).filter(produtoCaro));




// ## FUNÇÃO MAP - retorna os atributos de um array de objetos - retorna o mesmo tamanho do array original ###############
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Lapis", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Cria uma função que converte e retorna de Json para objeto
const paraObjeto = json => JSON.parse(json)
//Cria a função que retorna o preço
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)




// ## FUNÇÃO FIND - Retorna o que encontrar em um array ,se não encontrar retorna undefined ##
const usuarios = [
    {codigo: 10, nome: 'Larissa'},
    {codigo: 11, nome: 'Pedro'},
    {codigo: 12, nome: 'Paloma'},
    {codigo: 13, nome: 'José'}
]

const encontrou = usuarios.find(usuario => usuario.codigo==12)
console.log(encontrou)



// ## FUNÇÃO REDUCE - Ele vai iterando o array, por exemplo ele pode ir somando cada item ##
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//somando as notas de todos alunos
console.log(alunos.map(aluno => aluno.nota).reduce((acumulador, atual, indice) => {
    return acumulador + atual
}, 0))



// ## FUNÇÃO CONCAT - Concatena 2 arrays ##
const filhas = ['Patricia', 'Veronica']
const filhos = ['Paulo', 'Afranio']
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos)