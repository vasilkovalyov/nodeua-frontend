"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Button, Container, Stack } from "@mui/material";

import useDrawer from "@/src/shared/hooks/use-drawer";
import { MenuToggler } from "@/src/widgets/components";
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
    <Stack component="header" className="header-mobile" py="10px">
      <Container>
        <Stack direction="row" justifyContent="space-between" gap="10px">
          <MenuToggler active={isOpen} onClick={openMenu} />
          <Button variant="contained" size="small" href={AppRoutes.login} component={Link}>
            {t("login")}
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HeaderMobile;
