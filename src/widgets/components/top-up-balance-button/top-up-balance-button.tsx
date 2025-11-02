"use client";

import { FC, ReactNode } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@mui/material";
import useDialog from "@/src/shared/hooks/use-dialog";

type TopUpBalanceButtonProps = {
  textTranslationKey?: string;
  children?: ReactNode;
};

const TopUpBalanceButton: FC<TopUpBalanceButtonProps> = ({ textTranslationKey, children }) => {
  const t = useTranslations();
  const { onOpenDialog } = useDialog();

  return (
    <Button
      variant="contained"
      size="small"
      sx={{
        minWidth: "40px"
      }}
      onClick={() =>
        onOpenDialog({
          dialogName: "TOP_UP_BALANCE_DIALOG"
        })
      }
    >
      {textTranslationKey && t(textTranslationKey)}
      {children && children}
    </Button>
  );
};

export default TopUpBalanceButton;
