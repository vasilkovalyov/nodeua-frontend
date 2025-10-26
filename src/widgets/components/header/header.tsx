"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Button, Link, Paper, Skeleton, Stack } from "@mui/material";

import {
  AuthContainer,
  AuthUserPanel,
  LanguageSwitcher,
  UserNavigation,
  TopUpBalanceButton,
  UserBalance
} from "@/src/widgets/components";

import useAuth from "@/app/hooks/use-auth";
import { AppRoutes } from "@/src/shared/routes";

import { AppLogo } from "@/src/shared/ui";
import LogoutButton from "../logout-button/logout-button";

import "./header.scss";

const Header: FC = () => {
  const t = useTranslations();
  const { isAdmin } = useAuth();

  return (
    <Paper elevation={3} component="header" className="header">
      <Stack p="14px" gap="20px" flex={1}>
        <Stack direction="row" justifyContent="center">
          <AppLogo />
        </Stack>
        <Box>
          <UserNavigation />
        </Box>
        <Stack marginBlockStart="auto">
          <AuthContainer
            auth={
              <Stack gap="10px">
                <AuthUserPanel />
                <Stack direction="row" gap="10px" justifyContent="space-between">
                  <LanguageSwitcher />
                  {!isAdmin && <TopUpBalanceButton textTranslationKey="top_up_balance" />}
                </Stack>
                {!isAdmin && <UserBalance />}
                <LogoutButton />
              </Stack>
            }
            notAuth={
              <Stack gap="20px">
                <Stack direction="row" gap="10px" justifyContent="space-between">
                  <LanguageSwitcher />
                </Stack>
                <Button variant="contained" size="small" href={AppRoutes.login} component={Link} fullWidth>
                  {t("login")}
                </Button>
              </Stack>
            }
            loader={
              <Stack gap="10px">
                <Skeleton sx={{ height: "40px", transform: "none" }} />
                <Skeleton sx={{ height: "24px", transform: "none" }} />
                <Skeleton sx={{ height: "36px", transform: "none" }} />
              </Stack>
            }
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Header;
