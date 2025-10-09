"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { ListItem, ListItemText, Typography } from "@mui/material";

type CartOrderListItemProps = {
  titleTranslationKey?: string;
  title?: string;
  value: string;
};

const CartOrderListItem: FC<CartOrderListItemProps> = ({ titleTranslationKey, title, value }) => {
  const t = useTranslations();

  return (
    <ListItem
      sx={{
        padding: 0
      }}
    >
      <ListItemText>
        <Typography variant="caption">
          {titleTranslationKey && t(titleTranslationKey)}
          {title && title}
        </Typography>
      </ListItemText>
      <ListItemText
        sx={{
          textAlign: "right"
        }}
      >
        <Typography variant="caption">{value}</Typography>
      </ListItemText>
    </ListItem>
  );
};

export default CartOrderListItem;
