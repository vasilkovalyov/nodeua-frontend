import { CartNodeType } from "./cart.type";

export function calcTotalAmount(items: CartNodeType[]): number {
  let total: number = 0;

  for (const node of items) {
    total += node.price * (node.duration * node.quantity);
  }

  return total;
}
