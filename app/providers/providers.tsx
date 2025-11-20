"use client";

import "@/styles/main.scss";

import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";

import store from "../store/store";
import MuiProvider from "./mui-provider";
import { AuthProvider } from "../context/auth";
import { RootLayout } from "@/src/widgets/layouts";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

type ProvidersProps = {
  children: ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
  timeZone: string;
};

function Providers({ children, messages, locale, timeZone }: ProvidersProps): ReactElement {
  return (
    <Provider store={store}>
      <NextIntlClientProvider locale={locale} timeZone={timeZone} messages={messages}>
        <MuiProvider>
          <AuthProvider>
            <RootLayout>{children}</RootLayout>
          </AuthProvider>
        </MuiProvider>
      </NextIntlClientProvider>
    </Provider>
  );
}

export default Providers;
