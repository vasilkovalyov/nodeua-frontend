"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@mui/material";
import useDialog from "@/src/shared/hooks/use-dialog";

const TopUpBalanceButton: FC = () => {
  const t = useTranslations();
  const { onOpenDialog } = useDialog();

  return (
    <Button
      variant="contained"
      size="small"
      onClick={() =>
        onOpenDialog({
          dialogName: "TOP_UP_BALANCE_DIALOG"
        })
      }
    >
      {t("top_up_balance")}
    </Button>
  );
};

export default TopUpBalanceButton;
