"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Button, Container, Paper, Stack } from "@mui/material";

import useDrawer from "@/src/shared/hooks/use-drawer";
import { LanguageSwitcher, MenuToggler } from "@/src/widgets/components";
import { Link } from "@/app/routing";
import { AppRoutes } from "@/src/shared/routes";

import "./header-mobile.scss";

const HeaderMobile: FC = () => {
  const t = useTranslations();

  const { onOpenDrawer, isOpenDrawer } = useDrawer();
  const isOpen = isOpenDrawer("BASE_NAVIGATION_DRAWER");

  function openMenu(): void {
    onOpenDrawer("BASE_NAVIGATION_DRAWER");
  }

  return (
    <Paper elevation={3} component="header" className="header-mobile">
      <Container>
        <Stack direction="row" justifyContent="space-between" gap="10px" py="10px">
          <MenuToggler active={isOpen} onClick={openMenu} />
          <Stack direction="row" gap="10px">
            <LanguageSwitcher />
            <Button variant="contained" size="small" href={AppRoutes.login} component={Link}>
              {t("login")}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Paper>
  );
};

export default HeaderMobile;
