"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Button, Link, Skeleton, Stack } from "@mui/material";

import { AuthContainer, AuthUserPanel, Navigation, UserBalance } from "@/src/widgets/components";
import { AppRoutes } from "@/src/shared/routes";
import { navigationList } from "@/src/shared/hooks/use-header-navigation";
import { AppLogo } from "@/src/shared/ui";
import LogoutButton from "../logout-button/logout-button";

import "./header.scss";

const Header: FC = () => {
  const t = useTranslations();

  return (
    <Stack component="header" className="header" p="14px" gap="20px">
      <Stack direction="row" justifyContent="center">
        <AppLogo />
      </Stack>
      <Box>
        <Navigation items={navigationList} />
      </Box>
      <Stack marginBlockStart="auto">
        <AuthContainer
          auth={
            <Stack gap="10px">
              <AuthUserPanel />
              <UserBalance />
              <LogoutButton />
            </Stack>
          }
          notAuth={
            <Button variant="contained" size="small" href={AppRoutes.login} component={Link} fullWidth>
              {t("login")}
            </Button>
          }
          loader={
            <Stack gap="10px">
              <Skeleton sx={{ height: "40px", transform: "none" }} />
              <Skeleton sx={{ height: "54px", transform: "none" }} />
              <Skeleton sx={{ height: "36px", transform: "none" }} />
            </Stack>
          }
        />
      </Stack>
    </Stack>
  );
};

export default Header;
