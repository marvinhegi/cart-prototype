import { Cart } from "../src/cart/cart";
import { SimpleProduct, Bundle } from "../src/Product/Bundle";
import { PercentageDiscount, MwStStrategy } from "../src/cart/priceStrategy";

test("tset with fruit Bundle", () => {
  const apple = new SimpleProduct("Apple", 1.0);
  const orange = new SimpleProduct("Orange", 2.0);

  const bundle = new Bundle("Fruit Bundle");
  bundle.add(apple);
  bundle.add(orange);

  const cart = new Cart();
  cart.addItem(bundle);
  cart.addStrategy(new PercentageDiscount(10));
  cart.addStrategy(new MwStStrategy(8.1)); 

  const total = cart.getTotal();
  expect(total).toBeCloseTo(2.918);
});
