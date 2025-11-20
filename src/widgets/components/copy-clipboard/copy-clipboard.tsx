"use client";

import { FC, ReactNode } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useSnackbar from "@/src/shared/hooks/use-snackbar";

type CopyClipboardProps = {
  children?: ReactNode;
  value: string;
  showIcon?: boolean;
};

const CopyClipboard: FC<CopyClipboardProps> = ({ children, showIcon = true, value }) => {
  const t = useTranslations();
  const { showSnackbar } = useSnackbar();

  function onHandleCopy(): void {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        showSnackbar({ title: t("copy_to_clipboard"), color: "success", verticalPosition: "bottom" });
      })
      .catch(() => {
        showSnackbar({ title: t("copy_to_clipboard_failed"), color: "error", verticalPosition: "bottom" });
      });
  }

  return (
    <Button variant="contained" size="small" onClick={onHandleCopy}>
      {showIcon && <ContentCopyIcon fontSize="small" />}
      {children && children}
    </Button>
  );
};

export default CopyClipboard;
