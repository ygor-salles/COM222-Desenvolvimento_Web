1 - OBSERVABLE - Caso ocorra um evento, 
exemplo: alguém comprou um produto no site de vendas, o subject que é quem monitora o evento
irá notificar o observer de email que irá notificar via e-mail para o usuário, ao mesmo tempo irá
notificar outro observer de estoque que irá subtrair a contagem no estoque no sistema, outro observer
irá ativar outro gatilho no sitema onde defini que o tal produto deve ser embalado para entrega
EVENTO -> SUBJECT -> OBSERVABLE1, OBSERVABLE2, OBSERVABLE3,...
Neste caso o subject funcionará como intermediário entre o eveneto e o observable 
EX:

BACKEND:
criaNoBackend(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto)
}

FRONTEND
criarProduto(): void {
    this.criarNoBackend(this.produto).subscribe(() => {
        this.exibirMensagem("Salvo com sucesso!");
    });
}

//método subscribe serve para esperar a resposta do servidor(BACKEND),
pq a resposta de uma função quando enviada ao servidor é 
diferente de quando enviada no próprio FRONTEND, o servidor demora alguns segundos,
não é algo instantaneo. Dae assim que for criado o produto no BACKEND e registrado no banco
a função no BACKEND terminou, dae pode executar a função dentro do subscribe q neste exemplo é
"Salvo com sucesso"
