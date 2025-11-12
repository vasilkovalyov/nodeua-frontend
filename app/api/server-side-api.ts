"use server";

// import { cookies } from "next/headers";
// import { cookieKeys } from "@/src/shared/config/cookie-keys";

type BufferSource = ArrayBufferView<ArrayBuffer> | ArrayBuffer;
type XMLHttpRequestBodyInit = Blob | BufferSource | FormData | URLSearchParams | string;
type RequestMode = "cors" | "navigate" | "no-cors" | "same-origin";
type RequestCache = "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
type RequestCredentials = "include" | "omit" | "same-origin";
type BodyInit = ReadableStream | XMLHttpRequestBodyInit;
type HeadersInit = [string, string][] | Record<string, string> | Headers;
type RequestPriority = "auto" | "high" | "low";
type RequestRedirect = "error" | "follow" | "manual";
type ReferrerPolicy =
  | ""
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";

type NextFetchRequestConfig = {
  revalidate?: number | false;
  tags?: string[];
};

type ServerSideFetchOptions = {
  body?: BodyInit | null;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
  integrity?: string;
  keepalive?: boolean;
  method?: string;
  mode?: RequestMode;
  priority?: RequestPriority;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  revalidate?: number | false;
  tags?: string[];
  next?: NextFetchRequestConfig | undefined;
};

export async function serverSideFetch(url: string, options?: ServerSideFetchOptions): Promise<Response> {
  const basePath = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api`;
  // const cookiesResponse = await cookies();
  // const token = cookiesResponse.get(cookieKeys.accessToken)?.value;

  const res = await fetch(`${basePath}${url}`, {
    ...options
    // headers: {
    //   Authorization: `Bearer ${token}`,
    //   ...options?.headers
    // }
  });

  return res;
}
