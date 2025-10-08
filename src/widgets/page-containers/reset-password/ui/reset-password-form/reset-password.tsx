"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Stack } from "@mui/material";

import { useAppSelector } from "@/app/store/store";
import { RootForm, FieldBox } from "@/src/shared/ui";

import validationSchema from "./reset-password.validation";
import { ResetPasswordFields } from "./reset-password.types";

const ResetPasswordForm: FC = () => {
  const t = useTranslations();
  const isLoading = useAppSelector((store) => store.auth.isLoading);

  const methods = useForm<ResetPasswordFields>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit"
  });

  function onSubmit({ password }: ResetPasswordFields): void {
    console.log(password);
  }

  return (
    <RootForm methods={methods} onSubmit={onSubmit}>
      <Stack>
        <FieldBox
          labelTranslationKey="new_password_label"
          placeholderTranslationKey="password_placeholder"
          name="password"
          type="password"
          fieldType="password-field"
        />
        <Button variant="contained" aria-label={t("reset_password_button_text")} type="submit" loading={isLoading}>
          {t("reset_password_button_text")}
        </Button>
      </Stack>
    </RootForm>
  );
};

export default ResetPasswordForm;
