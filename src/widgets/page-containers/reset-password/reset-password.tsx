"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Stack, Typography } from "@mui/material";

import { Link } from "@/app/routing";
import { AppRoutes } from "@/src/shared/routes";
import ResetPasswordForm from "./ui/reset-password-form/reset-password";

const ResetPasswordPageContainer: FC = () => {
  const t = useTranslations();

  return (
    <Box>
      <Typography variant="body2">{t("reset_password_title")}</Typography>
      <Typography>{t("reset_password_sub_title")}</Typography>
      <ResetPasswordForm />
      <Stack>
        <Typography variant="body2">
          {t("remembered_password")} <Link href={AppRoutes.login}>{t("login")}</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default ResetPasswordPageContainer;
