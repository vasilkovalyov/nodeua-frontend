"use client";

import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl";

import store from "../store/store";
import MuiProvider from "./mui-provider";
import { AuthProvider } from "../context/auth";
import { RootLayout } from "@/src/widgets/layouts";

if (process.env.MODE === "production") {
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
    <NextIntlClientProvider locale={locale} timeZone={timeZone} messages={messages}>
      <Provider store={store}>
        <AuthProvider>
          <MuiProvider>
            <RootLayout>{children}</RootLayout>
          </MuiProvider>
        </AuthProvider>
      </Provider>
    </NextIntlClientProvider>
  );
}

export default Providers;
