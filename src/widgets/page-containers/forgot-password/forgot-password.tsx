import { FC } from "react";
import { useTranslations } from "next-intl";

import { Stack, Typography } from "@mui/material";

import { Link } from "@/app/routing";
import { AppRoutes } from "@/src/shared/routes";
import ForgotPasswordForm from "./ui/forgot-password-form/forgot-password";
import { FormHeading } from "@/src/shared/ui";

const ForgotPasswordPageContainer: FC = () => {
  const t = useTranslations();

  return (
    <Stack gap="20px">
      <FormHeading titleTranslationKey="forgot_password_title" subTitleTranslationKey="forgot_password_sub_title" />
      <ForgotPasswordForm />
      <Stack>
        <Typography variant="body2">
          {t("remembered_password")} <Link href={AppRoutes.login}>{t("login")}</Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ForgotPasswordPageContainer;
