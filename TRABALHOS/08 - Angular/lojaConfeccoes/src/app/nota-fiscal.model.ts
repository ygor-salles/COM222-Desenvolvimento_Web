import { Produto } from './produto.model';

export class NotaFiscal {
    constructor(
        public nomeCliente: string,
        public produtosComprados: Array<Produto>,
        public quantidade: Array<number>
    ) {}
}