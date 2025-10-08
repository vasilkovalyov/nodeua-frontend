"use client";

import { FC } from "react";

import { Avatar, Button, Stack, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { useRouter } from "@/app/routing";
import { useAppDispatch } from "@/app/store/store";
import useAuth from "@/app/hooks/use-auth";
import { logOut } from "@/app/store/modules/auth/actions";
import { AppRoutes } from "@/src/shared/routes";

const AuthUserPanel: FC = () => {
  const dispatch = useAppDispatch();

  const { email } = useAuth();

  const router = useRouter();

  function onLogout(): void {
    dispatch(logOut());
    router.push(AppRoutes.login);
  }

  return (
    <Stack>
      <Avatar>{email.split("")[0]}</Avatar>
      <Typography>{email}</Typography>
      <Button onClick={onLogout}>
        <LogoutIcon />
      </Button>
    </Stack>
  );
};

export default AuthUserPanel;
