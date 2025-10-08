import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Typography } from "@mui/material";

type FormHeadingProps = {
  titleTranslationKey: string;
  subTitleTranslationKey: string;
};

const FormHeading: FC<FormHeadingProps> = ({ titleTranslationKey, subTitleTranslationKey }) => {
  const t = useTranslations();

  return (
    <Box>
      <Typography variant="h3">{t(titleTranslationKey)}</Typography>
      <Typography variant="body2">{t(subTitleTranslationKey)}</Typography>
    </Box>
  );
};

export default FormHeading;
