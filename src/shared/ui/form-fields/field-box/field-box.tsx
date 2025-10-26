"use client";

import { FC, InputHTMLAttributes, ReactElement, ReactNode } from "react";
import { useTranslations } from "next-intl";

import { FormLabel, Stack, Typography } from "@mui/material";
import TextField from "../text-field/text-field";
import PasswordField from "../password-field/password-field";

type FieldBoxProps = {
  labelTranslationKey?: string;
  additionalText?: ReactNode;
  placeholderTranslationKey?: string;
  className?: string;
  name: string;
  type: InputHTMLAttributes<unknown>["type"];
  ariaLabel?: string;
  minRows?: number;
  multiline?: boolean;
  fieldType: "text-field" | "password-field";
};

const FieldBox: FC<FieldBoxProps> = ({
  labelTranslationKey,
  additionalText,
  placeholderTranslationKey,
  name,
  type,
  ariaLabel,
  multiline = false,
  minRows,
  fieldType
}) => {
  const t = useTranslations();

  function getField(): ReactElement {
    switch (fieldType) {
      case "text-field":
        return (
          <TextField
            fullWidth
            name={name}
            type={type}
            multiline={multiline}
            minRows={minRows}
            aria-label={ariaLabel}
            placeholder={placeholderTranslationKey && t(placeholderTranslationKey)}
          />
        );
      case "password-field":
        return (
          <PasswordField
            fullWidth
            name={name}
            type={type}
            aria-label={ariaLabel}
            placeholder={placeholderTranslationKey && t(placeholderTranslationKey)}
          />
        );
      default:
        return (
          <TextField
            fullWidth
            name={name}
            type={type}
            multiline={multiline}
            minRows={minRows}
            aria-label={ariaLabel}
            placeholder={placeholderTranslationKey && t(placeholderTranslationKey)}
          />
        );
    }
  }

  return (
    <FormLabel>
      <Stack direction="row" gap="10px" justifyContent="space-between" marginBlockEnd="10px">
        {labelTranslationKey && <Typography variant="body2">{t(labelTranslationKey)}</Typography>}
        {additionalText && additionalText}
      </Stack>
      {getField()}
    </FormLabel>
  );
};

export default FieldBox;
