"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Button, Paper, Skeleton, Stack } from "@mui/material";

import { Link } from "@/app/routing";
import { AuthContainer, AuthUserPanel, AdminNavigation, LanguageSwitcher } from "@/src/widgets/components";

import { AppRoutes } from "@/src/shared/routes";
import AdminLogo from "@/src/shared/ui/admin-logo/admin-logo";
import LogoutButton from "../logout-button/logout-button";

import "./admin-header.scss";

const AdminHeader: FC = () => {
  const t = useTranslations();

  return (
    <Paper elevation={3} component="header" className="admin-header">
      <Stack p="14px" gap="20px" flex={1}>
        <Stack direction="row" justifyContent="center">
          <AdminLogo />
        </Stack>
        <Box>
          <AdminNavigation />
        </Box>
        <Stack marginBlockStart="auto">
          <AuthContainer
            auth={
              <Stack gap="10px">
                <AuthUserPanel />
                <LanguageSwitcher />
                <LogoutButton />
              </Stack>
            }
            notAuth={
              <Stack gap="20px">
                <Button variant="contained" size="small" href={AppRoutes.login} component={Link} fullWidth>
                  {t("login")}
                </Button>
              </Stack>
            }
            loader={
              <Stack gap="10px">
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

export default AdminHeader;
