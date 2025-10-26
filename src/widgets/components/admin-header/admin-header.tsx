"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Button, Link, Paper, Skeleton, Stack, Typography } from "@mui/material";

import { AuthContainer, AuthUserPanel, AdminNavigation } from "@/src/widgets/components";

import { AppRoutes } from "@/src/shared/routes";
import { adminNavigationList } from "@/src/shared/hooks/use-admin-header-navigation";
import LogoutButton from "../logout-button/logout-button";

import "./admin-header.scss";

const AdminHeader: FC = () => {
  const t = useTranslations();

  return (
    <Paper elevation={3} component="header" className="admin-header">
      <Stack p="14px" gap="20px" flex={1}>
        <Stack direction="row" justifyContent="center">
          <Typography variant="h1">Admin</Typography>
        </Stack>
        <Box>
          <AdminNavigation items={adminNavigationList} />
        </Box>
        <Stack marginBlockStart="auto">
          <AuthContainer
            auth={
              <Stack gap="10px">
                <AuthUserPanel />
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
