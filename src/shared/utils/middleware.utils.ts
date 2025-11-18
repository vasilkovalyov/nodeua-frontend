"use server";

import { jwtVerify } from "jose";

import { NextRequest } from "next/server";
import { cookieKeys } from "../config/cookie-keys";
import { AppRoutes } from "../routes";
import { isForbiddenUrlForUserRole, isPrivateUrl } from "../config/methods";
import { removeLocalePrefix } from "./common";
import { UserRole } from "../types/user-role";

export async function handleUserPermission(req: NextRequest): Promise<string | URL | null> {
  const url = req.nextUrl.clone();
  const cookies = req.cookies;
  const token = cookies.get(cookieKeys.accessToken);

  const NOT_FOUND_URL = new URL(`${AppRoutes.notFound}`, url.href);

  if (!token) {
    if (isPrivateUrl(url.pathname)) {
      return NOT_FOUND_URL;
    }
  }

  try {
    const jwtSecret = process.env.JWT_ACCESS_SECRET;

    if (token && jwtSecret) {
      const secret = new TextEncoder().encode(jwtSecret);
      const { payload } = await jwtVerify(token.value, secret);
      const currentRole: UserRole = payload?.isAdmin ? "admin" : "user";
      const pathNameWithoutLocale = removeLocalePrefix(url.pathname);
      if (payload.isAdmin && pathNameWithoutLocale === AppRoutes.home) {
        return new URL(`${AppRoutes.admin}`, url.href);
      }

      if (isForbiddenUrlForUserRole(pathNameWithoutLocale, currentRole)) {
        return NOT_FOUND_URL;
      }
    }
  } catch {
    return null;
  }

  return null;
}
