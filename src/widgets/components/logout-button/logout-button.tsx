"use client";

import { FC } from "react";

import { Button } from "@mui/material";

import { useRouter } from "@/app/routing";
import { useAppDispatch } from "@/app/store/store";
import { logOut } from "@/app/store/modules/auth/actions";
import { AppRoutes } from "@/src/shared/routes";
import { useTranslations } from "next-intl";

const LogoutButton: FC = () => {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  const router = useRouter();

  function onLogout(): void {
    dispatch(logOut());
    router.push(AppRoutes.login);
  }

  return (
    <Button variant="contained" fullWidth onClick={onLogout}>
      {t("logout")}
    </Button>
  );
};

export default LogoutButton;
