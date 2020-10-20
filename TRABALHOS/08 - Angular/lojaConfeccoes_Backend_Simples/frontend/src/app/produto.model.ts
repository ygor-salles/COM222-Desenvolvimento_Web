export class Produto {
    constructor(
        public codigo: number,
        public descricao: string,
        public valorUnitario: number,
        public desconto: number,
    ) {}
}