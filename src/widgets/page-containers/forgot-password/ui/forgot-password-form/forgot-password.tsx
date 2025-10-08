"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Stack } from "@mui/material";

import { useAppSelector } from "@/app/store/store";
import { RootForm, FieldBox } from "@/src/shared/ui";

import validationSchema from "./forgot-password.validation";
import { ForgotPasswordFields } from "./forgot-password.types";

const ForgotPasswordForm: FC = () => {
  const t = useTranslations();
  const isLoading = useAppSelector((store) => store.auth.isLoading);

  const methods = useForm<ForgotPasswordFields>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit"
  });

  function onSubmit({ email }: ForgotPasswordFields): void {
    console.log(email);
  }

  return (
    <RootForm methods={methods} onSubmit={onSubmit}>
      <Stack>
        <FieldBox
          labelTranslationKey="auth_email_label"
          placeholderTranslationKey="auth_email_placeholder"
          name="email"
          type="email"
          fieldType={"text-field"}
        />
        <Button aria-label="login button" type="submit" loading={isLoading}>
          {t("auth_login")}
        </Button>
      </Stack>
    </RootForm>
  );
};

export default ForgotPasswordForm;
