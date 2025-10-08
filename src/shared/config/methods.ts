import { ROLE_PRIVATE_ROUTES } from "../routes";
import { CURRENCY } from "@/src/shared/constant/currency";

export function getFormatedCurrency(value: number): string {
  return (
    CURRENCY.base +
    "" +
    value
      .toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
      .replace(".", ",")
  );
}

export function isPrivateUrl(url: string): boolean {
  return ROLE_PRIVATE_ROUTES.some((route) => url.includes(route));
}
