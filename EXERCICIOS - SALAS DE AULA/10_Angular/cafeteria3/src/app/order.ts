export class Order {
    constructor(
       public name: string,
       public email: string,
       public phone: number,
       public drink: string,
       public quantDrink: number,
       public food: string,
       public quantFood: number,       
       public sendText: boolean
    ){}
 }     
