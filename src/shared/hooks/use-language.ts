"use client";

import { useEffect, useState } from "react";

import { useRouter } from "@/app/routing";

import Cookies from "js-cookie";

import { cookieKeys } from "@/src/shared/config/cookie-keys";
import { LANGUAGES } from "@/app/constants/languages";
import { LanguageCodesType, LanguageType } from "../types/language";

type UseLanguageProps = {
  allLanguages: LanguageType[];
  currentLanguage: LanguageType | null;
  onChangeLanguage: (languageCode: LanguageCodesType) => void;
};

const BASE_LANGUAGE = LANGUAGES[0];

function getLanguageCode(): LanguageType {
  const langFromLC: string | undefined = Cookies.get(cookieKeys.locale);

  if (langFromLC) {
    const resultLangFromLC = findLanguage(langFromLC as LanguageCodesType);
    if (resultLangFromLC) return resultLangFromLC;
    return BASE_LANGUAGE;
  }

  const resultLangFromNavigator = findLanguage(navigator.language as LanguageCodesType);
  if (resultLangFromNavigator) {
    return resultLangFromNavigator;
  }

  return BASE_LANGUAGE;
}

const findLanguage = (langCode?: LanguageCodesType): LanguageType => {
  const findLanguageResult = LANGUAGES.find((item) => item.code === langCode);
  if (findLanguageResult) {
    return findLanguageResult;
  }
  return BASE_LANGUAGE;
};

const useLanguage = (): UseLanguageProps => {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState<LanguageType | null>(null);

  useEffect(() => {
    const langCode: LanguageType = getLanguageCode();
    const findLang = findLanguage(langCode.code) as LanguageType;
    setCurrentLanguage(findLang);
  }, []);

  function onChangeLanguage(languageCode: LanguageCodesType): void {
    const findLang = findLanguage(languageCode) as LanguageType;
    Cookies.set(cookieKeys.locale, findLang.code);
    setCurrentLanguage(findLang);
    router.refresh();
  }

  return {
    allLanguages: LANGUAGES,
    currentLanguage,
    onChangeLanguage
  };
};

export default useLanguage;
