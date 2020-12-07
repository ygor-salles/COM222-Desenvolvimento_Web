import { Product } from './product';

export class Type {
    constructor(
       public _id: string,
       public name: string,
       public products: Product[],
    ){}
 }  