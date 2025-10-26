"use server";

import { cookies } from "next/headers";
import { cookieKeys } from "@/src/shared/config/cookie-keys";

export async function serverSideFetch(url: string): Promise<Response> {
  const basePath = `${process.env.NEXT_PUBLIC_API_URL}/api`;
  const cookiesResponse = await cookies();
  const token = cookiesResponse.get(cookieKeys.accessToken)?.value;

  const res = await fetch(`${basePath}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    cache: "no-store"
  });

  return res;
}
