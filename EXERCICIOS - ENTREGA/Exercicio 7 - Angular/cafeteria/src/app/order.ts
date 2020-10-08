export class Order {
   constructor(
      public name: string,
      public email: string,
      public phone: number,
      public drink: string,
      public qtdDrink: number,
      public food: string,
      public qtdFood: number,
      public tempPreference: string,
      public sendText: boolean
   ) { }
}     
