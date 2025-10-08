"use client";

import { ChangeEvent, FC } from "react";
import { useTranslations } from "next-intl";
import { useFormContext, useController, UseControllerProps } from "react-hook-form";

import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";

type TextFieldProps = {
  name: string;
  rules?: UseControllerProps["rules"];
  showErrorMessage?: boolean;
  className?: string;
} & MuiTextFieldProps;

const TextField: FC<TextFieldProps> = ({ name, rules, className, showErrorMessage = true, onChange, ...props }) => {
  const t = useTranslations();
  const { control, register } = useFormContext();
  const {
    field,
    fieldState: { error }
  } = useController({ name, control, rules: rules || {} });

  function defaultOnChange(e: ChangeEvent<HTMLInputElement>): void {
    field.onChange(e);
  }

  return (
    <MuiTextField
      {...props}
      {...register(name)}
      value={field.value || ""}
      autoCapitalize="none"
      autoCorrect="off"
      autoComplete="off"
      size="small"
      error={!!error}
      helperText={showErrorMessage && error ? t(error.message) : null}
      className={className}
      onChange={onChange || defaultOnChange}
    />
  );
};

export default TextField;
