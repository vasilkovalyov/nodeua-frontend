"use server";

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

export interface FetchResult<T> {
  success: boolean;
  data: T;
  error?: string;
  status: number;
}

export async function serverSideFetch<T>(url: string, options?: ServerSideFetchOptions): Promise<FetchResult<T>> {
  const basePath = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api`;

  const res = await fetch(`${basePath}${url}`, {
    ...options
  });

  const responseStatus = res.status;

  if (!res.ok) {
    const text = await res.text();
    const textMessage = text || res.statusText;
    return {
      success: false,
      status: responseStatus,
      error: textMessage,
      data: null as T
    };
  }

  const data: T = await res.json();

  return { success: true, status: responseStatus, data };
}
