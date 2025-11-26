import { ReactElement } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

import { Box, Button, Stack, Typography } from "@mui/material";
import { AppRoutes } from "@/src/shared/routes";
import { Link } from "@/app/routing";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t("server_not_response"),
    description: t("server_not_response")
  };
}

export default async function NotFound(): Promise<ReactElement> {
  const t = await getTranslations();

  return (
    <Stack minHeight="90dvh" justifyContent="center">
      <Typography variant="h1" textAlign="center" marginBlockEnd="40px">
        {t("server_not_response")}
      </Typography>
      <Box textAlign="center">
        <Button size="small" variant="contained" component={Box}>
          <Link href={AppRoutes.home}>{t("not_found_link_text")}</Link>
        </Button>
      </Box>
    </Stack>
  );
}
