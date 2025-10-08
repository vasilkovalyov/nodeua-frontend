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
      <Typography variant="body2">{t("forgot_password_title")}</Typography>
      <Typography>{t("forgot_password_sub_title")}</Typography>
      <ForgotPasswordForm />
      <Stack>
        <Typography variant="body2">
          {t("remembered_password")} <Link href={AppRoutes.login}>{t("login")}</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default ForgotPasswordPageContainer;
