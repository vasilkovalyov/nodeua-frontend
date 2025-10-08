"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Stack, Typography } from "@mui/material";

import { Link } from "@/app/routing";
import { AppRoutes } from "@/src/shared/routes";
import RegistrationForm from "./ui/registration-form/registration-form";

const RegistrationPageContainer: FC = () => {
  const t = useTranslations();

  return (
    <Box>
      <Typography variant="body2">{t("sign_up_title")}</Typography>
      <Typography>{t("sign_up_sub_title")}</Typography>
      <RegistrationForm />
      <Stack>
        <Typography variant="body2">
          {t("already_have_account")} <Link href={AppRoutes.login}>{t("login")}</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default RegistrationPageContainer;
