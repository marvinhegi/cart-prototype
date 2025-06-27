export interface Product {
  getPrice(): number;
}


export class SimpleProduct implements Product {
  constructor(private name: string, private price: number) {}

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }
}
