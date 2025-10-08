"use client";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Alert, Button, Stack, Typography } from "@mui/material";

import { Link, useRouter } from "@/app/routing";
import { useAppSelector } from "@/app/store/store";
import { useLoginMutation } from "@/app/store/slices/auth/auth.api";
import { ErrorType } from "@/src/shared/types/error";
import { AppRoutes } from "@/src/shared/routes";
import { RootForm, FieldBox } from "@/src/shared/ui";

import validationSchema from "./login-form.validation";
import { LoginFormFields } from "./login-form.types";

const LoginForm: FC = () => {
  const t = useTranslations();
  const router = useRouter();
  const [loginApi] = useLoginMutation();
  const isLoading = useAppSelector((store) => store.auth.isLoading);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const methods = useForm<LoginFormFields>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit"
  });

  function onSubmit({ email, password }: LoginFormFields): void {
    loginApi({
      email: email,
      password: password
    })
      .unwrap()
      .then(() => {
        router.push(AppRoutes.home);
      })
      .catch((e: ErrorType) => {
        setErrorMessage(e.data?.message);
      });
  }

  return (
    <RootForm methods={methods} onSubmit={onSubmit}>
      <Stack gap="20px">
        <FieldBox
          labelTranslationKey="email_label"
          placeholderTranslationKey="email_placeholder"
          name="email"
          type="email"
          fieldType="text-field"
        />
        <FieldBox
          labelTranslationKey="password_label"
          placeholderTranslationKey="password_placeholder"
          additionalText={
            <Typography variant="body2">
              <Link href={AppRoutes.forgotPassword}>{t("forgot_your_password")}</Link>
            </Typography>
          }
          name="password"
          type="password"
          fieldType="password-field"
        />
        <Button variant="contained" aria-label={t("login")} type="submit" loading={isLoading}>
          {t("login")}
        </Button>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </Stack>
    </RootForm>
  );
};

export default LoginForm;
