import { Item } from './item';

export class Pedido {
    constructor(
        public nome: string,
        public endereco: string,
        public item: Item[]
    ) {}
}