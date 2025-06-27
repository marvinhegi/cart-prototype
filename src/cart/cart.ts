import { Product } from "../Product/Product";
import { PricingStrategy } from "./priceStrategy";

export class Cart {
  private items: Product[] = [];
  private strategies: PricingStrategy[] = [];

  addItem(item: Product) {
    this.items.push(item);
  }

  addStrategy(strategy: PricingStrategy) {
    this.strategies.push(strategy);
  }

  getTotal(): number {
    let total = this.items.reduce((sum, item) => sum + item.getPrice(), 0);
    for (const strategy of this.strategies) {
      total = strategy.apply(total);
    }
    return total;
  }
}
