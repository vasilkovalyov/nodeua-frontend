import { FORBIDDEN_ROUTES_FOR_ADMIN, FORBIDDEN_ROUTES_FOR_USER, ROLE_PRIVATE_ROUTES } from "../routes";
import { CURRENCY } from "@/src/shared/constant/currency";
import { UserRole } from "../types/user-role";

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

export function isPrivateUrlForUserRole(url: string, role: UserRole): boolean {
  const urls = role === "admin" ? FORBIDDEN_ROUTES_FOR_ADMIN : FORBIDDEN_ROUTES_FOR_USER;

  return urls.some((route) => url.includes(route));
}
