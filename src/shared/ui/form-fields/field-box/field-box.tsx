"use client";

import { FC, InputHTMLAttributes, ReactElement } from "react";
import { useTranslations } from "next-intl";

import { FormLabel, Typography } from "@mui/material";
import TextField from "../text-field/text-field";
import PasswordField from "../password-field/password-field";

type FieldBoxProps = {
  labelTranslationKey?: string;
  placeholderTranslationKey: string;
  className?: string;
  name: string;
  type: InputHTMLAttributes<unknown>["type"];
  ariaLabel?: string;
  fieldType: "text-field" | "password-field";
};

const FieldBox: FC<FieldBoxProps> = ({
  labelTranslationKey,
  placeholderTranslationKey,
  name,
  type,
  ariaLabel,
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
            aria-label={ariaLabel}
            placeholder={t(placeholderTranslationKey)}
          />
        );
      case "password-field":
        return (
          <PasswordField
            fullWidth
            name={name}
            type={type}
            aria-label={ariaLabel}
            placeholder={t(placeholderTranslationKey)}
          />
        );
      default:
        return (
          <TextField
            fullWidth
            name={name}
            type={type}
            aria-label={ariaLabel}
            placeholder={t(placeholderTranslationKey)}
          />
        );
    }
  }

  return (
    <FormLabel>
      {labelTranslationKey && <Typography>{t(labelTranslationKey)}</Typography>}
      {getField()}
    </FormLabel>
  );
};

export default FieldBox;
