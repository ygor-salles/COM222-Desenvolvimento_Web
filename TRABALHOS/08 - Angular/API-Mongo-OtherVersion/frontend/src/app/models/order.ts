import { Product } from './product';

export class Order {
    constructor(
       public name: string,
       public products: Product[],
       public total: number
    ){}
 }  