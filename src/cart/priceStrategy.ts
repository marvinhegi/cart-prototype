export interface PricingStrategy {
  apply(price: number): number;
}

export class PercentageDiscount implements PricingStrategy {
  constructor(private percentage: number) {}

  apply(price: number): number {
    return price * (1 - this.percentage / 100);
  }
}

export class MwStStrategy implements PricingStrategy {
  constructor(private vatRate: number) {}

  apply(price: number): number {
    return price * (1 + this.vatRate / 100);
  }
}
