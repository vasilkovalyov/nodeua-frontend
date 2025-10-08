"use client";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Alert, Button, Stack } from "@mui/material";

import { useAppSelector } from "@/app/store/store";
import { useSignUpMutation } from "@/app/store/slices/auth/auth.api";
import { RootForm, FieldBox } from "@/src/shared/ui";

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
      <Stack gap="20px">
        <FieldBox name="email" type="email" fieldType="text-field" placeholderTranslationKey="email_placeholder" />
        <FieldBox
          name="password"
          type="password"
          fieldType="password-field"
          placeholderTranslationKey="create_password_placeholder"
        />
        <Button variant="contained" type="submit" loading={isLoading}>
          {t("register")}
        </Button>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </Stack>
    </RootForm>
  );
};

export default RegistrationForm;
