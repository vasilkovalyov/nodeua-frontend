"use client";

import { FC } from "react";
import cn from "classnames";
import { Stack, Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

import useDialog from "@/src/shared/hooks/use-dialog";
import useLanguage from "@/src/shared/hooks/use-language";

import "./language-switcher.scss";

const LanguageSwitcher: FC = () => {
  const { onOpenDialog } = useDialog();
  const { currentLanguage } = useLanguage();

  return (
    <Stack className={cn("language-switcher")} direction="row" alignItems="center" gap="10px">
      <LanguageIcon />
      <Button
        variant="outlined"
        size="small"
        onClick={() =>
          onOpenDialog({
            dialogName: "LANGUAGE_SWITCHER_DIALOG"
          })
        }
        sx={{
          p: 0,
          minWidth: "30px"
        }}
      >
        {currentLanguage?.shortName}
      </Button>
    </Stack>
  );
};

export default LanguageSwitcher;
