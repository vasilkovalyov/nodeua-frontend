"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Stack, Typography } from "@mui/material";

import { Link } from "@/app/routing";
import { AppRoutes } from "@/src/shared/routes";
import LoginForm from "./ui/login-form/login-form";

const LoginPageContainer: FC = () => {
  const t = useTranslations();

  return (
    <Box>
      <Typography variant="body2">{t("login_title")}</Typography>
      <Typography>{t("login_sub_title")}</Typography>
      <LoginForm />
      <Stack>
        <Typography variant="body2">
          {t("dont_have_account")} <Link href={AppRoutes.registration}>{t("register")}</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default LoginPageContainer;
