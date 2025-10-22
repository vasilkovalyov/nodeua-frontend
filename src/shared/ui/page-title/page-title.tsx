import { FC } from "react";
import { useTranslations } from "next-intl";

import { Typography } from "@mui/material";

export type PageTitleProps = {
  titleTranslationKey: string;
};

const PageTitle: FC<PageTitleProps> = ({ titleTranslationKey }) => {
  const t = useTranslations();

  return (
    <Typography variant="h1" textAlign="center">
      {t(titleTranslationKey)}
    </Typography>
  );
};

export default PageTitle;
