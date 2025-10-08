"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Stack, Typography } from "@mui/material";

import { Link } from "@/app/routing";
import { AppRoutes } from "@/src/shared/routes";
import ForgotPasswordForm from "./ui/forgot-password-form/forgot-password";

const ForgotPasswordPageContainer: FC = () => {
  const t = useTranslations();

  return (
    <Box>
      <Typography variant="body2">{t("auth_credential_update_content_title_password")}</Typography>
      <ForgotPasswordForm />
      <Stack>
        <Typography variant="body2">
          {t("auth_have_account")}? <Link href={AppRoutes.login}>{t("auth_login")}</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default ForgotPasswordPageContainer;
