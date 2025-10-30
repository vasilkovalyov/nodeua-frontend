"use client";

import { FC, useState } from "react";

import { useTranslations } from "next-intl";
import { Alert, Button, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { TELEGRAM_LINK } from "../../constant/links";

const Subscribe: FC = () => {
  const t = useTranslations();
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <Snackbar open={isActive} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
      <Alert
        severity="info"
        action={
          <Button onClick={() => setIsActive(false)}>
            <CloseIcon />
          </Button>
        }
      >
        {t.rich("subscribe", {
          link: (chunks) => (
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              {chunks}
            </a>
          )
        })}
      </Alert>
    </Snackbar>
  );
};

export default Subscribe;
