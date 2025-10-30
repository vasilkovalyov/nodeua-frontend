"use client";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Alert, Button, Stack } from "@mui/material";

import { useRouter } from "@/app/routing";
import { useAppSelector } from "@/app/store/store";
import { useSignUpMutation } from "@/app/store/slices/auth/auth.api";
import { RootForm, FieldBox } from "@/src/shared/ui";

import validationSchema from "./registration-form.validation";
import { RegistrationFormFields } from "./registration-form.types";
import { ErrorType } from "@/src/shared/types/error";
import { AppRoutes } from "@/src/shared/routes";

const RegistrationForm: FC = () => {
  const t = useTranslations();
  const [signUpApi] = useSignUpMutation();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isLoading = useAppSelector((store) => store.auth.isLoading);

  const methods = useForm<RegistrationFormFields>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit"
  });

  async function onSubmit(props: RegistrationFormFields): Promise<void> {
    const { email, password } = props;

    await signUpApi({
      email: email,
      password: password
    })
      .unwrap()
      .then(() => {
        router.push(AppRoutes.login);
      })
      .catch((e: ErrorType) => {
        setErrorMessage(e.data?.message);
      });
  }

  return (
    <RootForm methods={methods} onSubmit={onSubmit}>
      <Stack gap="20px">
        <FieldBox
          name="email"
          type="email"
          fieldType="text-field"
          labelTranslationKey="email_label"
          placeholderTranslationKey="email_placeholder"
        />
        <FieldBox
          name="password"
          type="password"
          fieldType="password-field"
          labelTranslationKey="password_label"
          placeholderTranslationKey="create_password_placeholder"
        />
        <FieldBox
          labelTranslationKey="confirm_password_label"
          placeholderTranslationKey="confirm_password_placeholder"
          name="confirm_password"
          type="password"
          fieldType="password-field"
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
