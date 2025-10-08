"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Stack, Container, Typography, Button } from "@mui/material";

import { Link } from "@/app/routing";
import { AppRoutes } from "@/src/shared/routes";

const NotFoundPageContainer: FC = () => {
  const t = useTranslations();

  return (
    <Stack component="section">
      <Container>
        <Typography variant="h1">{t("not_found_title")}</Typography>
        <Box>
          <Button href={AppRoutes.home} component={Link}>
            {t("not_found_link_text")}
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};
export default NotFoundPageContainer;
