"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Stack, Typography } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import { useAppSelector } from "@/app/store/store";
import { selectUserState } from "@/app/store/slices/user/user.selectors";
import { getFormatedCurrency } from "@/src/shared/config/methods";

const UserBalance: FC = () => {
  const t = useTranslations();

  const user = useAppSelector(selectUserState);

  return (
    <Stack gap="10px" direction="row" justifyContent="space-between">
      <Stack direction="row" gap="10px" alignItems="center">
        <AccountBalanceWalletOutlinedIcon />
        <Typography variant="caption">{t("balance_money")}</Typography>
      </Stack>
      <Typography variant="body2" textAlign="right">
        {getFormatedCurrency(user.profile.balance)}
      </Typography>
    </Stack>
  );
};

export default UserBalance;
