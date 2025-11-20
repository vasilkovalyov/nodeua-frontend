import { FC } from "react";
import { useTranslations } from "next-intl";

import { Typography } from "@mui/material";

export type PageTitleProps = {
  titleTranslationKey?: string;
  title?: string;
};

const PageTitle: FC<PageTitleProps> = ({ titleTranslationKey, title }) => {
  const t = useTranslations();

  return (
    <Typography variant="h1" textAlign="center">
      {titleTranslationKey ? t(titleTranslationKey) : title}
    </Typography>
  );
};

export default PageTitle;
