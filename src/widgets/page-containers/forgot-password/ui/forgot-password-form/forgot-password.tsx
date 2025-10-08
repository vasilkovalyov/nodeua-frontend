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
          labelTranslationKey="email_label"
          placeholderTranslationKey="email_placeholder"
          name="email"
          type="email"
          fieldType={"text-field"}
        />
        <Button variant="contained" aria-label={t("send_reset_email_button_text")} type="submit" loading={isLoading}>
          {t("send_reset_email_button_text")}
        </Button>
      </Stack>
    </RootForm>
  );
};

export default ForgotPasswordForm;
