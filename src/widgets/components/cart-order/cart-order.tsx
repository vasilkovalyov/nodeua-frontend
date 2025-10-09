"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Divider, List, Stack, Typography } from "@mui/material";

import { useAppSelector } from "@/app/store/store";
import { getNodesFromCartSelector } from "@/app/store/slices/cart/cart.selectors";
import { CartNodeType } from "@/app/store/slices/cart/cart.type";
import { selectUserState } from "@/app/store/slices/user/user.selectors";

import { getFormatedCurrency } from "@/src/shared/config/methods";
import { CURRENCY } from "@/src/shared/constant/currency";
import { LackBalancePanel } from "@/src/shared/ui";
import CartOrderListItem from "./ui/cart-order-list-item/cart-order-list-item";
import TopUpBalanceButton from "../top-up-balance-button/top-up-balance-button";

const CartOrder: FC = () => {
  const t = useTranslations();
  const nodes = useAppSelector(getNodesFromCartSelector);

  const user = useAppSelector(selectUserState);
  const userBalanceAmount = user.profile.balance;

  function getTotal(items: CartNodeType[]): number {
    let total: number = 0;

    for (const node of items) {
      total += node.price_per_month * (node.duration * node.quantity);
    }

    return total;
  }

  function getDifferenceAmount(): number {
    return getTotal(nodes) - userBalanceAmount;
  }

  return (
    <Stack p="10px" gap="10px">
      <Typography variant="h5">{t("nodes")}</Typography>
      <Divider />
      <List>
        {nodes.map((node) => {
          const title = `${node.name} x ${node.quantity} | ${node.duration} ${node.duration > 1 ? t("months") : t("month")} ${CURRENCY.base}`;
          const totalPrice = node.price_per_month * (node.duration * node.quantity);
          return <CartOrderListItem key={node._id} title={title} value={getFormatedCurrency(totalPrice)} />;
        })}
      </List>
      <Divider />
      <List>
        <CartOrderListItem titleTranslationKey="total" value={getFormatedCurrency(getTotal(nodes))} />
        <CartOrderListItem titleTranslationKey="balance_money" value={getFormatedCurrency(userBalanceAmount)} />
      </List>
      {getDifferenceAmount() >= 0 && (
        <>
          <LackBalancePanel balance={getDifferenceAmount()} />
          <TopUpBalanceButton />
        </>
      )}
    </Stack>
  );
};

export default CartOrder;
