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

