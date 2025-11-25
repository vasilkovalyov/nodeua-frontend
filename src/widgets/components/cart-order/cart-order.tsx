"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Button, Divider, List, Stack, Typography } from "@mui/material";

import { useAppSelector } from "@/app/store/store";
import { getCartState } from "@/app/store/slices/cart/cart.selectors";
import { CartNodeType } from "@/app/store/slices/cart/cart.type";
import { selectUserState } from "@/app/store/slices/user/user.selectors";

import { getFormatedCurrency } from "@/src/shared/config/methods";
import { CURRENCY } from "@/src/shared/constant/currency";
import { LackBalancePanel } from "@/src/shared/ui";
import { useBuyNodeMutation } from "@/app/store/slices/user/user.api";
import useSnackbar from "@/src/shared/hooks/use-snackbar";
import { NodePaymentCartType } from "@/app/store/slices/user/user.types";

import CartOrderListItem from "./ui/cart-order-list-item/cart-order-list-item";
import TopUpBalanceButton from "../top-up-balance-button/top-up-balance-button";

function getNodesForPayment(nodes: CartNodeType[]): NodePaymentCartType[] {
  return nodes.map((node) => {
    return {
      _id: node._id,
      months: node.duration,
      price: node.price,
      quantity: node.quantity
    };
  });
}

const CartOrder: FC = () => {
  const t = useTranslations();
  const { nodes, totalAmount: cartTotalAmount } = useAppSelector(getCartState);
  const { showSnackbar } = useSnackbar();
  const [buyNode, { isLoading }] = useBuyNodeMutation();

  const user = useAppSelector(selectUserState);
  const userBalanceAmount = user.profile.balance;

  function getDifferenceAmount(): number {
    return cartTotalAmount - userBalanceAmount;
  }

  function onHandleBuyNode(): void {
    buyNode({
      nodes: getNodesForPayment(nodes)
    })
      .unwrap()
      .then(() => {
        showSnackbar({ title: t("success_node_add"), color: "success" });
      })
      .catch(() => {
        showSnackbar({ title: t("error_node_add") });
      });
  }

  return (
    <Stack p="10px" gap="10px">
      <Typography variant="h5">{t("nodes")}</Typography>
      <Divider />
      <List>
        {nodes.map((node) => {
          const title = `${node.name} x ${node.quantity} | ${node.duration} ${node.duration > 1 ? t("months") : t("month")} ${CURRENCY.base}`;
          const totalPrice = node.price * (node.duration * node.quantity);
          return <CartOrderListItem key={node._id} title={title} value={getFormatedCurrency(totalPrice)} />;
        })}
      </List>
      <Divider />
      <List>
        <CartOrderListItem titleTranslationKey="total" value={getFormatedCurrency(cartTotalAmount)} />
        <CartOrderListItem titleTranslationKey="balance_money" value={getFormatedCurrency(userBalanceAmount)} />
      </List>
      {getDifferenceAmount() >= 0 ? (
        <>
          <LackBalancePanel balance={getDifferenceAmount()} />
          <TopUpBalanceButton textTranslationKey="top_up_balance" />
        </>
      ) : (
        <Button variant="contained" color="primary" onClick={onHandleBuyNode} loading={isLoading}>
          {t("buy_node")}
        </Button>
      )}
    </Stack>
  );
};

export default CartOrder;
