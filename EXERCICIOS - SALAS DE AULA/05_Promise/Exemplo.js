function fazDivisao(a, b){
  return new Promise((resolve, reject) => {
    if (b!=0 && b!=1)
      resolve(a/b)
    else if (b == 1)
      reject('Não pode ser igual a 1')
    else
      reject('Não pode ser igual a zero')
  })
}

fazDivisao(10, 0)
  .then(resultado => console.log('Deu certo: '+resultado))
  .catch(erro => console.log('Deu Errado: '+erro))