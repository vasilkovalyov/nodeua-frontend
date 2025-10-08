"use client";

import { FC, useEffect, useState } from "react";
import cn from "classnames";
import Cookies from "js-cookie";

import { Stack, Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

import { useRouter } from "@/app/routing";

import { findLanguage, getLangCode, getLanguageCode } from "./language-switcher.utils";
import { cookieKeys } from "@/src/shared/config/cookie-keys";

import "./language-switcher.scss";

type LanguageSwitcherProps = {
  compact?: boolean;
};

type SelectedLanguage = {
  code: string;
  shortName: string;
};

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ compact }) => {
  const router = useRouter();
  const [lang, setLang] = useState<SelectedLanguage>({
    code: "",
    shortName: ""
  });

  function onHandleChangeLanguage(): void {
    const langCode: SelectedLanguage = getLangCode();
    const findLang = findLanguage(langCode.code) as SelectedLanguage;
    Cookies.set(cookieKeys.locale, findLang.code);
    setLang(findLang);
    router.refresh();
  }

  useEffect(() => {
    setLang(getLanguageCode());
  }, []);

  return (
    <Stack className={cn("language-switcher", { "language-switcher--compact": compact })}>
      {!compact && <LanguageIcon />}
      <Button onClick={onHandleChangeLanguage}>{lang.shortName}</Button>
    </Stack>
  );
};

export default LanguageSwitcher;
