import { FC } from "react";
import cn from "classnames";
import { useTranslations } from "next-intl";

import { Box, Typography } from "@mui/material";

type PasswordValidationPanelProps = {
  isError?: boolean;
};

const PasswordValidationPanel: FC<PasswordValidationPanelProps> = ({ isError = false }) => {
  const t = useTranslations();

  return (
    <Box
      className={cn("password-validation-panel", {
        "password-validation-panel--has-error": isError
      })}
    >
      <Typography variant="caption">{t("auth_password_requirements")} !@#$%^&*()_+/\.-~</Typography>
    </Box>
  );
};

export default PasswordValidationPanel;
