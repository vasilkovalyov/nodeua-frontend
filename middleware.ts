import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

import { routingConfig } from "./app/routing";
import { isPrivateUrl, isForbiddenUrlForUserRole } from "./src/shared/config/methods";
import { cookieKeys } from "./src/shared/config/cookie-keys";
import { UserRole } from "./src/shared/types/user-role";
import { AppRoutes } from "./src/shared/routes";
import { DEFAULT_LOCALE, LOCALES } from "./app/constants/languages";

const intlMiddleware = createIntlMiddleware(routingConfig);

export default async function middleware(req: NextRequest): Promise<any> {
  const requestUrl = req.url;
  const response = intlMiddleware(req);
  response.headers.set("x-current-url", requestUrl);

  const cookies = req.cookies;

  const token = cookies.get(cookieKeys.accessToken);

  const pathName = req.nextUrl.pathname;

  const regex = /^\/([a-z]{2})(?=\/|$)/i;
  const match: string[] | null = pathName.match(regex);
  const matchLang = match !== null ? match[1] : null;

  let appLocale: string = DEFAULT_LOCALE;

  const urlObj = new URL(requestUrl);

  if (matchLang === null) {
    const url = new URL(appLocale, urlObj.origin).href;
    return NextResponse.redirect(`${url}${urlObj.search}`);
  } else {
    const findLocale = LOCALES.find((code) => matchLang.includes(code));
    if (findLocale !== undefined) {
      appLocale = findLocale;
    } else {
      return NextResponse.redirect(new URL(appLocale, urlObj.origin).href);
    }
  }

  const BASE_PATH_WITH_LOCALE = `${appLocale}`;
  const NOT_FOUND_URL = new URL(`${BASE_PATH_WITH_LOCALE}${AppRoutes.notFound}`, requestUrl).href;

  if (!token) {
    if (isPrivateUrl(pathName)) {
      return NextResponse.redirect(NOT_FOUND_URL);
    }
  }

  try {
    const jwtSecret = process.env.JWT_ACCESS_SECRET;

    if (token && jwtSecret) {
      const secret = new TextEncoder().encode(jwtSecret);
      const { payload } = await jwtVerify(token.value, secret);
      const currentRole: UserRole = payload?.isAdmin ? "admin" : "user";

      if (payload.isAdmin && pathName === AppRoutes.home) {
        return NextResponse.redirect(new URL(`${BASE_PATH_WITH_LOCALE}${AppRoutes.admin}`, requestUrl));
      }

      if (isForbiddenUrlForUserRole(pathName, currentRole)) {
        return NextResponse.redirect(NOT_FOUND_URL);
      }
    }
  } catch {
    return NextResponse.redirect(new URL(`${BASE_PATH_WITH_LOCALE}${AppRoutes.home}`, requestUrl));
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
