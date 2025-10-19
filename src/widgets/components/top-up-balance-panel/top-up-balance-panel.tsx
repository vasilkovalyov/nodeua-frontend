"use client";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";

import { Button, Stack, Typography, TextField, InputAdornment } from "@mui/material";

import { FormHeading } from "@/src/shared/ui";
import { useAppSelector } from "@/app/store/store";
import { selectUserState } from "@/app/store/slices/user/user.selectors";
import { useTopUpBalanceProfileMutation } from "@/app/store/slices/user/user.api";

import { CURRENCY } from "@/src/shared/constant/currency";
import useSnackbar from "@/src/shared/hooks/use-snackbar";
import useDialog from "@/src/shared/hooks/use-dialog";
import useAuth from "@/app/hooks/use-auth";

import TopUpAmountList from "./ui/top-up-amount-list/top-up-amount-list";
import TopUpBalanceInfo from "./ui/top-up-balance-info/top-up-balance-info";

const AMOUNT_LIST: number[] = [5, 10, 25, 50, 100, 250];

const TopUpBalancePanel: FC = () => {
  const t = useTranslations();
  const { userId } = useAuth();
  const { onCloseDialogByName } = useDialog();
  const { showSnackbar } = useSnackbar();
  const user = useAppSelector(selectUserState);

  const [topUpBalance, { isLoading }] = useTopUpBalanceProfileMutation();

  const [amountValue, setAmountValue] = useState<number>(AMOUNT_LIST[0]);
  const [afterTopUpBalance, setAfterTopUpBalance] = useState<number>(AMOUNT_LIST[0]);

  const userBalance = user.profile.balance;

  function onHandleAddAmount(amount: number): void {
    setAfterTopUpBalance(amount + userBalance);
    setAmountValue(amount);
  }

  function onHandleChangeInputField(amount: string): void {
    setAfterTopUpBalance(+amount + userBalance);
    setAmountValue(+amount);
  }

  function onHandleTopUpBalance(): void {
    topUpBalance({
      userId: userId,
      amount: amountValue
    })
      .unwrap()
      .then(() => {
        showSnackbar({ title: t("success_top_up_balance"), color: "success" });
        onCloseDialog();
      })
      .catch(() => {
        showSnackbar({ title: t("error_top_up_balance") });
      });
  }

  function onCloseDialog(): void {
    onCloseDialogByName("TOP_UP_BALANCE_DIALOG");
  }

  return (
    <Stack gap="20px">
      <FormHeading titleTranslationKey="top_up_balance" subTitleTranslationKey="top_up_balance_sub_title" />
      <TopUpBalanceInfo balance={userBalance} afterTopUpBalance={afterTopUpBalance} />
      <Stack gap="10px">
        <Typography variant="body2">{t("amount")}</Typography>
        <TextField
          fullWidth
          value={amountValue}
          size="small"
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">{CURRENCY.base}</InputAdornment>
            }
          }}
          onChange={(e) => onHandleChangeInputField(e.target.value)}
        />
      </Stack>
      <TopUpAmountList selectedAmount={amountValue} amountList={AMOUNT_LIST} onChange={onHandleAddAmount} />
      <Stack direction={{ sm: "row" }} flexDirection={{ sm: "row-reverse" }} gap="10px" justifyContent="end">
        <Button variant="contained" size="small" onClick={onHandleTopUpBalance} loading={isLoading}>
          {t("proceed_payment_button_text")}
        </Button>
        <Button variant="outlined" size="small" onClick={onCloseDialog}>
          {t("cancel_button_text")}
        </Button>
      </Stack>
    </Stack>
  );
};

export default TopUpBalancePanel;
