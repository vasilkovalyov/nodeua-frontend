import { DEFAULT_LOCALE, LOCALES } from "./app/constants/languages";

/** @type {import('next-intl').NextIntlConfig} */
module.exports = {
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  pages: {
    "*": ["common"] // namespace common для всех страниц
  }
};
