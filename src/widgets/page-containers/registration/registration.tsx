import { FC } from "react";
import { useTranslations } from "next-intl";

import { Stack, Typography } from "@mui/material";

import { Link } from "@/app/routing";
import { AppRoutes } from "@/src/shared/routes";
import RegistrationForm from "./ui/registration-form/registration-form";
import { FormHeading } from "@/src/shared/ui";
import { GoogleAuthButton } from "../../components";

const RegistrationPageContainer: FC = () => {
  const t = useTranslations();

  return (
    <Stack gap="20px">
      <FormHeading titleTranslationKey="sign_up_title" subTitleTranslationKey="sign_up_sub_title" />
      <RegistrationForm />
      <GoogleAuthButton type="registration" />
      <Stack>
        <Typography variant="body2">
          {t("already_have_account")} <Link href={AppRoutes.login}>{t("login")}</Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default RegistrationPageContainer;
