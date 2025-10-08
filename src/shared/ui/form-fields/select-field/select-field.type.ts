import { UseControllerProps } from "react-hook-form";

import { SelectProps } from "@mui/material";

export type SelectFieldProps = {
  name: string;
  rules?: UseControllerProps["rules"];
  showErrorMessage?: boolean;
  className?: string;
  options: SelectOptionType[];
} & SelectProps;

export type SelectOptionType = {
  value: string;
  title: string;
};
