"use client";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";

import { Button, Stack, Typography, TextField, InputAdornment } from "@mui/material";
import { FormHeading } from "@/src/shared/ui";
import { useAppSelector } from "@/app/store/store";
import { selectUserState } from "@/app/store/slices/user/user.selectors";
import { CURRENCY } from "@/src/shared/constant/currency";

import TopUpAmountList from "./ui/top-up-amount-list/top-up-amount-list";
import TopUpBalanceInfo from "./ui/top-up-balance-info/top-up-balance-info";
import useDialog from "@/src/shared/hooks/use-dialog";

const AMOUNT_LIST: number[] = [5, 10, 25, 50, 100, 250];

const TopUpBalancePanel: FC = () => {
  const t = useTranslations();
  const { onCloseDialogByName } = useDialog();
  const [amountValue, setAmountValue] = useState<number>(AMOUNT_LIST[0]);
  const [afterTopUpBalance, setAfterTopUpBalance] = useState<number>(AMOUNT_LIST[0]);

  const user = useAppSelector(selectUserState);
  const userBalance = user.profile.balance;

  function onHandleAddAmount(amount: number): void {
    setAfterTopUpBalance(amount + userBalance);
    setAmountValue(amount);
  }

  function onHandleChangeInputField(amount: string): void {
    setAfterTopUpBalance(+amount + userBalance);
    setAmountValue(+amount);
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
      <Stack direction="row" gap="10px" justifyContent="flex-end">
        <Button variant="outlined" size="small" onClick={() => onCloseDialogByName("TOP_UP_BALANCE_DIALOG")}>
          {t("cancel_button_text")}
        </Button>
        <Button variant="contained" size="small">
          {t("proceed_payment_button_text")}
        </Button>
      </Stack>
    </Stack>
  );
};

export default TopUpBalancePanel;
