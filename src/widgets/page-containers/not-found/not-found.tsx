"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Stack, Box, Typography, Button } from "@mui/material";

import { Link } from "@/app/routing";
import { AppRoutes } from "@/src/shared/routes";

const NotFoundPageContainer: FC = () => {
  const t = useTranslations();

  return (
    <Stack minHeight="90dvh" justifyContent="center">
      <Typography variant="h1" textAlign="center" marginBlockEnd="40px">
        {t("not_found_title")}
      </Typography>
      <Box textAlign="center">
        <Button size="small" variant="contained" href={AppRoutes.home} component={Link}>
          {t("not_found_link_text")}
        </Button>
      </Box>
    </Stack>
  );
};
export default NotFoundPageContainer;
