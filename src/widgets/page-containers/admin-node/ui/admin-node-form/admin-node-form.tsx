"use client";

import { ChangeEvent, FC } from "react";

import { useTranslations } from "next-intl";
import { Box, Button, FormLabel, Grid, Stack, TextFieldProps, Typography } from "@mui/material";

import { TextField } from "@/src/shared/ui";

import { ADMIN_NODE_FORM_FIELDS } from "./admin-node-form.constant";
import { AdminNodeCreateFieldName, AdminNodeFormType } from "../../admin-node.types";

type AdminNodeFormProps = {
  isLoading?: boolean;
  methodType: AdminNodeFormType;
  onHandleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: AdminNodeCreateFieldName) => void;
};

const AdminNodeForm: FC<AdminNodeFormProps> = ({ isLoading, methodType, onHandleChange }) => {
  const t = useTranslations();

  const conditionalPriceProps = (type: AdminNodeCreateFieldName): TextFieldProps | undefined => {
    if (type === "price") {
      return {
        slotProps: {
          input: {
            startAdornment: <Box marginRight="4px">$</Box>
          }
        }
      };
    }
  };

  return (
    <>
      <Grid container spacing="20px" marginBottom="20px">
        {ADMIN_NODE_FORM_FIELDS.map(({ name, type, labelTranslationKey, gridNumber, multiline, minRows }) => (
          <Grid
            key={name}
            item
            xs={gridNumber ? gridNumber?.xs : 12}
            sm={gridNumber ? gridNumber?.sm : 12}
            md={gridNumber ? gridNumber?.md : 12}
            lg={gridNumber ? gridNumber?.lg : 12}
            xl={gridNumber ? gridNumber?.xl : 12}
          >
            <FormLabel>
              <Stack direction="column" gap="10px" justifyContent="space-between" marginBlockEnd="10px">
                {labelTranslationKey && <Typography variant="body2">{t(labelTranslationKey)}</Typography>}
                <TextField
                  fullWidth
                  name={name}
                  type={type}
                  multiline={multiline}
                  minRows={minRows || 1}
                  onChange={(e) => onHandleChange(e, name)}
                  {...conditionalPriceProps(name)}
                />
              </Stack>
            </FormLabel>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" type="submit" loading={isLoading}>
        {methodType === "create" ? t("create_global") : t("edit_global")}
      </Button>
    </>
  );
};

export default AdminNodeForm;
