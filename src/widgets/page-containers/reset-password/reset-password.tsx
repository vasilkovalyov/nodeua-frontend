import { FC } from "react";
import { useTranslations } from "next-intl";

import { Stack, Typography } from "@mui/material";

import { Link } from "@/app/routing";
import { AppRoutes } from "@/src/shared/routes";
import ResetPasswordForm from "./ui/reset-password-form/reset-password";
import { FormHeading } from "@/src/shared/ui";

const ResetPasswordPageContainer: FC = () => {
  const t = useTranslations();

  return (
    <Stack gap="20px">
      <FormHeading titleTranslationKey="reset_password_title" subTitleTranslationKey="reset_password_sub_title" />
      <ResetPasswordForm />
      <Stack>
        <Typography variant="body2">
          {t("remembered_password")} <Link href={AppRoutes.login}>{t("login")}</Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ResetPasswordPageContainer;
