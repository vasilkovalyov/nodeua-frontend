"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { useLogoutMutation } from "@/app/store/slices/auth/auth.api";

type LogoutButtonProps = {
  size?: "small" | "medium" | "large";
  useIcon?: boolean;
};

const LogoutButton: FC<LogoutButtonProps> = ({ size, useIcon }) => {
  const t = useTranslations();
  const [logoutApi] = useLogoutMutation();

  function onLogout(): void {
    logoutApi()
      .unwrap()
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Button
      variant="contained"
      sx={{
        minWidth: "40px"
      }}
      fullWidth={!useIcon}
      onClick={onLogout}
      size={size}
      aria-label={t("logout")}
    >
      {useIcon ? <LogoutIcon /> : t("logout")}
    </Button>
  );
};

export default LogoutButton;
