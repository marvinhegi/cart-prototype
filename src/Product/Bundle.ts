import { Product } from "./Product";

export class Bundle implements Product {
  private items: Product[] = [];

  constructor(private name: string) {}

  add(item: Product) {
    this.items.push(item);
  }

  getPrice(): number {
    return this.items.reduce((sum, item) => sum + item.getPrice(), 0);
  }

  getName(): string {
    return this.name;
  }
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
