"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Button, Link, Skeleton, Stack } from "@mui/material";

import useDrawer from "@/src/shared/hooks/use-drawer";
import { navigationList } from "@/src/shared/hooks/use-header-navigation";
import { AuthContainer, AuthUserPanel, MenuToggler, Navigation, UserBalance } from "@/src/widgets/components";
import { AppLogo } from "@/src/shared/ui";

import "./header.scss";
import { AppRoutes } from "@/src/shared/routes";

const HeaderProfile: FC = () => {
  const t = useTranslations();

  const { onOpenDrawer, isOpenDrawer } = useDrawer();
  const isOpen = isOpenDrawer("BASE_NAVIGATION_DRAWER");

  function openMenu(): void {
    onOpenDrawer("BASE_NAVIGATION_DRAWER");
  }

  return (
    <Stack component="header" className="header">
      <Box>
        <AppLogo />
        <MenuToggler active={isOpen} onClick={openMenu} />
      </Box>
      <Box>
        <Navigation items={navigationList} />
      </Box>
      <Stack>
        <AuthContainer
          auth={
            <Box>
              <AuthUserPanel />
              <UserBalance />
            </Box>
          }
          notAuth={
            <Box>
              <Button href={AppRoutes.login} component={Link} fullWidth>
                {t("auth_login")}
              </Button>
            </Box>
          }
          loader={
            <Stack>
              <Skeleton />
            </Stack>
          }
        />
      </Stack>
    </Stack>
  );
};

export default HeaderProfile;
