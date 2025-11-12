import { FC } from "react";
import { useTranslations } from "next-intl";

import { Stack, Typography } from "@mui/material";

import { Link } from "@/app/routing";
import { AppRoutes } from "@/src/shared/routes";
import LoginForm from "./ui/login-form/login-form";
import { FormHeading } from "@/src/shared/ui";
import { GoogleAuthButton } from "../../components";

const LoginPageContainer: FC = () => {
  const t = useTranslations();

  return (
    <Stack gap="20px">
      <FormHeading titleTranslationKey="login_title" subTitleTranslationKey="login_sub_title" />
      <LoginForm />
      <GoogleAuthButton />
      <Stack>
        <Typography variant="body2">
          {t("dont_have_account")} <Link href={AppRoutes.registration}>{t("register")}</Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LoginPageContainer;
