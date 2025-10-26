import { AdminNodeCreateFieldName } from "../../admin-node.types";

export type AdminNodeCreateFieldProps = {
  labelTranslationKey: string;
  type: string;
  name: AdminNodeCreateFieldName;
  multiline?: boolean;
  minRows?: number;
  gridNumber?: {
    lg?: number;
    md?: number;
    sm?: number;
    xl?: number;
    xs?: number;
  };
};
