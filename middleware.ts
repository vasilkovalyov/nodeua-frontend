import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

import { routingConfig } from "./app/routing";
import { isPrivateUrl, isPrivateUrlForUserRole } from "./src/shared/config/methods";
import { cookieKeys } from "./src/shared/config/cookie-keys";
import { UserRole } from "./src/shared/types/user-role";
import { AppRoutes } from "./src/shared/routes";

export default async function middleware(req: NextRequest): Promise<any> {
  const handleI18nRouting = createIntlMiddleware({
    ...routingConfig
  });

  const response = handleI18nRouting(req);
  response.headers.set("x-current-url", req.url);

  const cookies = req.cookies;
  const token = cookies.get(cookieKeys.accessToken);

  if (!token) {
    if (isPrivateUrl(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL(AppRoutes.notFound, req.url));
    }
  }

  const jwtSecret = process.env.JWT_ACCESS_SECRET;

  if (token && jwtSecret) {
    const secret = new TextEncoder().encode(jwtSecret);
    const { payload } = await jwtVerify(token.value, secret);
    const currentRole: UserRole = payload.isAdmin ? "admin" : "user";

    if (payload.isAdmin && req.nextUrl.pathname === AppRoutes.home) {
      return NextResponse.redirect(new URL(AppRoutes.admin, req.url));
    }

    if (isPrivateUrlForUserRole(req.nextUrl.pathname, currentRole)) {
      return NextResponse.redirect(new URL(AppRoutes.notFound, req.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
