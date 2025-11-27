import { PAYMENT_FEE_PERCENT } from "../constant/payment";

export function withPaymentFee(amount: number): number {
  const fee = PAYMENT_FEE_PERCENT / 100;
  return amount / (1 - fee);
}
