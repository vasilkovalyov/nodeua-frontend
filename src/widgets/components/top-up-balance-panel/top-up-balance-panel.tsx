"use client";

import { FC, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { Button, Stack, Typography, TextField, InputAdornment, Alert } from "@mui/material";

import { FormHeading } from "@/src/shared/ui";
import { useAppSelector } from "@/app/store/store";
import { selectUserState } from "@/app/store/slices/user/user.selectors";
import { useCreatePaymentInvoiceProfileMutation } from "@/app/store/slices/user/user.api";

import { CURRENCY } from "@/src/shared/constant/currency";
import useDialog from "@/src/shared/hooks/use-dialog";

import TopUpAmountList from "./ui/top-up-amount-list/top-up-amount-list";
import TopUpBalanceInfo from "./ui/top-up-balance-info/top-up-balance-info";
import { ErrorType } from "@/src/shared/types/error";
import { getCartTotalAmountState } from "@/app/store/slices/cart/cart.selectors";
import { PAYMENT_FEE_PERCENT } from "@/src/shared/constant/payment";

const AMOUNT_LIST: number[] = [5, 10, 25, 50, 100, 250];

const TopUpBalancePanel: FC = () => {
  const t = useTranslations();
  const { onCloseDialogByName } = useDialog();
  const user = useAppSelector(selectUserState);
  const cartTotalAmount = useAppSelector(getCartTotalAmountState);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [paymentInvoice, { isLoading }] = useCreatePaymentInvoiceProfileMutation();

  const [amountValue, setAmountValue] = useState<number>(AMOUNT_LIST[0]);
  const [afterTopUpBalance, setAfterTopUpBalance] = useState<number>(AMOUNT_LIST[0]);

  const userBalance = user.profile.balance;

  useEffect(() => {
    let amount = 0;
    if (cartTotalAmount !== 0) {
      amount = cartTotalAmount;
      setAmountValue(amount);
    } else {
      amount = user.profile.balance + amountValue;
    }
    setAfterTopUpBalance(amount);
  }, []);

  function onHandleAddAmount(amount: number): void {
    setAfterTopUpBalance(amount + userBalance);
    setAmountValue(amount);
  }

  function onHandleChangeInputField(amount: string): void {
    setAfterTopUpBalance(+amount + userBalance);
    setAmountValue(+amount);
  }

  function onHandleTopUpBalance(): void {
    paymentInvoice({
      amount: amountValue
    })
      .unwrap()
      .then((props) => {
        // console.log("props", props);
        window.location.href = props.invoice_url;
      })
      .catch((e: ErrorType) => {
        setErrorMessage(e.data.message);
      });
  }

  function onCloseDialog(): void {
    onCloseDialogByName("TOP_UP_BALANCE_DIALOG");
  }

  return (
    <Stack gap="20px">
      <FormHeading titleTranslationKey="top_up_balance" subTitleTranslationKey="top_up_balance_sub_title" />
      <Typography variant="body2">{t("payment_fee_info", { percentage_amount: PAYMENT_FEE_PERCENT })}</Typography>
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
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
    </Stack>
  );
};

export default TopUpBalancePanel;
