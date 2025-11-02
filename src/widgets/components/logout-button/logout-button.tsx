"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { useRouter } from "@/app/routing";
import { useAppDispatch } from "@/app/store/store";
import { logOut } from "@/app/store/modules/auth/actions";
import { AppRoutes } from "@/src/shared/routes";

type LogoutButtonProps = {
  size?: "small" | "medium" | "large";
  useIcon?: boolean;
};

const LogoutButton: FC<LogoutButtonProps> = ({ size, useIcon }) => {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  const router = useRouter();

  function onLogout(): void {
    dispatch(logOut());
    router.push(AppRoutes.login);
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
    >
      {useIcon ? <LogoutIcon /> : t("logout")}
    </Button>
  );
};

export default LogoutButton;
