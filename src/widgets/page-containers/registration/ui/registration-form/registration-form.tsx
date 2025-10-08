"use client";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Alert, Button, FormLabel, Stack, Typography } from "@mui/material";

import { Link } from "@/app/routing";
import { useAppSelector } from "@/app/store/store";
import { useSignUpMutation } from "@/app/store/slices/auth/auth.api";
import { AppRoutes } from "@/src/shared/routes";
import { PasswordField, RootForm, TextField, PasswordValidationPanel } from "@/src/shared/ui";

import validationSchema from "./registration-form.validation";
import { RegistrationFormFields } from "./registration-form.types";

const RegistrationForm: FC = () => {
  const t = useTranslations();
  const [signUpApi] = useSignUpMutation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isLoading = useAppSelector((store) => store.auth.isLoading);

  const methods = useForm<RegistrationFormFields>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit"
  });

  const {
    formState: { errors }
  } = methods;

  function onSubmit(props: RegistrationFormFields): void {
    const { email, password } = props;

    signUpApi({
      email: email,
      password: password
    })
      .unwrap()
      .catch((e) => {
        setErrorMessage(e.data?.messages[0]);
      });
  }

  return (
    <RootForm methods={methods} onSubmit={onSubmit}>
      <Stack>
        <FormLabel>
          <Typography>{t("auth_email_label")}</Typography>
          <TextField fullWidth name="email" aria-label="email input" placeholder={t("auth_email_placeholder")} />
        </FormLabel>
        <FormLabel>
          <Typography>{t("auth_password_label")}</Typography>
          <PasswordField
            fullWidth
            name="password"
            showErrorMessage={false}
            aria-label="password input"
            placeholder={t("auth_create_password_placeholder")}
          />
        </FormLabel>
        <PasswordValidationPanel isError={!!errors.password} />
        <Button type="submit" loading={isLoading}>
          {t("auth_sign_up")}
        </Button>
        <Stack>
          <Typography variant="body2">
            {t("auth_have_account")}? <Link href={AppRoutes.login}>{t("auth_login")}</Link>
          </Typography>
        </Stack>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </Stack>
    </RootForm>
  );
};

export default RegistrationForm;
