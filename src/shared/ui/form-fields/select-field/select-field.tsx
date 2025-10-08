"use client";

import { FC, ReactNode } from "react";
import { useTranslations } from "next-intl";
import { useFormContext, useController, Controller } from "react-hook-form";

import { Box, MenuItem, Select, FormHelperText, SelectChangeEvent } from "@mui/material";
import { SelectFieldProps } from "./select-field.type";

const SelectField: FC<SelectFieldProps> = ({
  name,
  rules,
  showErrorMessage = true,
  options,
  className,
  onChange,
  ...props
}) => {
  const t = useTranslations();

  const { control } = useFormContext();
  const {
    field,
    fieldState: { error }
  } = useController({ name, control, rules: rules || {} });

  function defaultOnChange(e: SelectChangeEvent<unknown>, child: ReactNode): void {
    if (onChange) {
      onChange(e, child);
    }
    field.onChange(e);
  }

  return (
    <Box className={className}>
      <Controller
        name={name}
        control={control}
        render={(propery) => (
          <Select {...propery.field} {...props} onChange={defaultOnChange}>
            {options.length
              ? options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.title}
                  </MenuItem>
                ))
              : null}
          </Select>
        )}
      />
      {showErrorMessage && <>{!!error && <FormHelperText error={true}>{t(error.message)}</FormHelperText>}</>}
    </Box>
  );
};

export default SelectField;
