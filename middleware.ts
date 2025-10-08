import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routingConfig } from "./app/routing";
import { isPrivateUrl } from "./src/shared/config/methods";
import { cookieKeys } from "./src/shared/config/cookie-keys";

export default async function middleware(req: NextRequest): Promise<any> {
  const handleI18nRouting = createIntlMiddleware({
    ...routingConfig
  });

  const response = handleI18nRouting(req);
  response.headers.set("x-current-url", req.url);

  const cookies = req.cookies;
  const token = cookies.get(cookieKeys.accessToken);

  // token
  if (!token) {
    const isExistPath = isPrivateUrl(req.nextUrl.pathname);
    if (isExistPath) {
      return NextResponse.redirect(new URL(`/404`, req.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
