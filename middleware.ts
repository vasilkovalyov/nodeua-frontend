import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

import { routingConfig } from "./app/routing";
import { DEFAULT_LOCALE } from "./app/constants/languages";
import { handleUserPermission } from "./src/shared/utils/middleware.utils";

const intlMiddleware = createIntlMiddleware(routingConfig);

export default async function middleware(req: NextRequest): Promise<any> {
  const requestUrl = req.nextUrl.clone();
  const cookies = req.cookies;

  const localeFromCookies = cookies.get("NEXT_LOCALE")?.value;

  if (requestUrl.pathname === "/") {
    requestUrl.pathname = `/${localeFromCookies || DEFAULT_LOCALE}`;
    return NextResponse.redirect(requestUrl);
  }

  const userPermission = await handleUserPermission(req);

  if (userPermission) {
    return NextResponse.redirect(userPermission);
  }

  const response = intlMiddleware(req);

  if (response) {
    response.headers.set("x-current-url", req.url);

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
