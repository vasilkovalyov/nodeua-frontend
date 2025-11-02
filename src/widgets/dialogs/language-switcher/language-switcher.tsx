import { FC } from "react";
import { useTranslations } from "next-intl";

import { Button, Stack, Typography } from "@mui/material";

import useDialog from "@/src/shared/hooks/use-dialog";
import { MenuToggler } from "@/src/widgets/components";

import useLanguage from "@/src/shared/hooks/use-language";
import { LanguageCodesType } from "@/src/shared/types/language";

import "./language-switcher.scss";

const LanguageSwitcherDialog: FC = () => {
  const t = useTranslations();

  const { allLanguages, onChangeLanguage } = useLanguage();
  const { onCloseDialogByName } = useDialog();
  const { currentLanguage } = useLanguage();

  function onCloseDialog(): void {
    onCloseDialogByName("LANGUAGE_SWITCHER_DIALOG");
  }

  function onHandleChangeLanguage(code: LanguageCodesType): void {
    onChangeLanguage(code);
    onCloseDialog();
  }

  return (
    <>
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
      <Typography variant="h3" textAlign="center">
        {t("choose_language_title")}
      </Typography>
      <Stack gap="20px" direction="row" justifyContent="center" minHeight="100px" alignItems="center">
        {allLanguages.map((language) => (
          <Button
            key={language.code}
            variant={currentLanguage?.code === language.code ? "contained" : "outlined"}
            onClick={() => onHandleChangeLanguage(language.code)}
          >
            {language.shortName}
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default LanguageSwitcherDialog;
