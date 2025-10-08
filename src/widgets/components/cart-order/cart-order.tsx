"use client";

import { FC } from "react";

import { Box, List, ListItemText, Typography } from "@mui/material";
import { useAppSelector } from "@/app/store/store";
import { getNodesFromCartSelector } from "@/app/store/slices/cart/cart.selectors";
import { CartNodeType } from "@/app/store/slices/cart/cart.type";
import { getFormatedCurrency } from "@/src/shared/config/methods";

const CartOrder: FC = () => {
  const nodes = useAppSelector(getNodesFromCartSelector);

  function getTotal(items: CartNodeType[]): string {
    let total: number = 0;

    for (const node of items) {
      total += node.price_per_month * (node.duration * node.quantity);
    }

    return getFormatedCurrency(total);
  }

  return (
    <Box>
      <Box>Order 1759653871214</Box>
      <Typography>Nodes</Typography>
      <List>
        {nodes.map((node) => {
          return (
            <ListItemText key={node._id}>
              {node.name} x {node.quantity} | {node.duration} {node.duration > 1 ? "months" : "month"} $
              {getFormatedCurrency(node.price_per_month * (node.duration * node.quantity))}
            </ListItemText>
          );
        })}
      </List>
      <Typography>{getTotal(nodes)}</Typography>
    </Box>
  );
};

export default CartOrder;
