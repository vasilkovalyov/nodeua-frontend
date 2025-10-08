"use client";

import { FC } from "react";

import { Avatar, Stack, Typography } from "@mui/material";

import useAuth from "@/app/hooks/use-auth";

const AuthUserPanel: FC = () => {
  const { email } = useAuth();

  return (
    <Stack direction="row" alignItems="center" gap="10px">
      <Avatar>{email.split("")[0]}</Avatar>
      <Typography variant="body2">{email}</Typography>
    </Stack>
  );
};

export default AuthUserPanel;
