import Cookies from "js-cookie";

import { languages } from "@/app/routing";
import { cookieKeys } from "@/src/shared/config/cookie-keys";

type SelectedLanguage = {
  code: string;
  shortName: string;
};

export function getLangCode(): SelectedLanguage {
  let langCode: SelectedLanguage = getLanguageCode();

  if (languages[0].code === langCode.code) {
    langCode = languages[1];
  } else {
    langCode = languages[0];
  }

  return langCode;
}

export const findLanguage = (langCode: string): SelectedLanguage | null => {
  const findLanguageResult = languages.find((item) => item.code === langCode) || null;
  if (findLanguageResult) {
    return findLanguageResult;
  }
  return languages[1];
};

export function getLanguageCode(): SelectedLanguage {
  const langFromLC = Cookies.get(cookieKeys.locale);

  if (langFromLC) {
    const resultLangFromLC = findLanguage(langFromLC);
    if (resultLangFromLC) return resultLangFromLC;
    return languages[1];
  }

  const resultLangFromNavigator = findLanguage(navigator.language);
  if (resultLangFromNavigator) {
    return resultLangFromNavigator;
  }

  return languages[1];
}
