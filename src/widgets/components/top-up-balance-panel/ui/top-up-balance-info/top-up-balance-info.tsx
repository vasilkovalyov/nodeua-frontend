"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Stack, Paper, Typography } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { getFormatedCurrency } from "@/src/shared/config/methods";

type TopUpBalanceInfoProps = {
  balance: number;
  afterTopUpBalance: number;
};

const TopUpBalanceInfo: FC<TopUpBalanceInfoProps> = ({ balance, afterTopUpBalance }) => {
  const t = useTranslations();
  return (
    <Paper elevation={3}>
      <Box padding="20px">
        <Stack direction="row" gap="40px">
          <Box display="flex" alignItems="center">
            <AccountBalanceWalletOutlinedIcon />
          </Box>
          <Box marginInlineEnd="40px">
            <Typography variant="body2">{t("current")}</Typography>
            <Typography variant="body1">{getFormatedCurrency(balance)}</Typography>
          </Box>
          <Box>
            <Typography variant="body2">{t("after_top_up")}</Typography>
            <Typography variant="body1">{getFormatedCurrency(afterTopUpBalance)}</Typography>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default TopUpBalanceInfo;
