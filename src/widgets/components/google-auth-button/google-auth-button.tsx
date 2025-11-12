"use client";

import { FC } from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useTranslations } from "next-intl";

type GoogleAuthButtonProps = {
  type?: "login" | "registration";
};

const GoogleAuthButton: FC<GoogleAuthButtonProps> = ({ type = "login" }) => {
  const t = useTranslations();

  function onHandleGoogleAuth(): void {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/auth/google`;
  }

  return (
    <Button variant="contained" onClick={onHandleGoogleAuth}>
      <GoogleIcon />
      {t(type === "login" ? "google_login" : "google_registration")}
    </Button>
  );
};

export default GoogleAuthButton;
