export class Product {
    constructor(
       public code: number,
       public description: string,
       public amount: number,
       public discount: number,
       public value: number,
       public total: number,
    ){}
 }  