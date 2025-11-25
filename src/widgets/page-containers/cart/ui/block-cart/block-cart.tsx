"use client";

import { FC, lazy } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/app/routing";
import { Box, Button, Paper, Skeleton, Stack, Typography } from "@mui/material";
import { useAppSelector } from "@/app/store/store";
import { getCartState } from "@/app/store/slices/cart/cart.selectors";
import { AppRoutes } from "@/src/shared/routes";
import BlockCartTemplate from "./ui/block-cart-template/block-cart-template";

const CartList = lazy(() => import("../../../../components/cart-list/cart-list"));
const CartOrder = lazy(() => import("../../../../components/cart-order/cart-order"));

const BlockCart: FC = () => {
  const t = useTranslations();
  const { nodes, isLoading: isLoadingCart } = useAppSelector(getCartState);

  if (isLoadingCart) {
    return (
      <BlockCartTemplate
        leftCol={<Skeleton sx={{ height: "250px" }} />}
        rightCol={<Skeleton sx={{ height: "250px" }} />}
      />
    );
  }

  return (
    <Box flex="1">
      <>
        {nodes.length ? (
          <BlockCartTemplate
            leftCol={<CartList nodes={nodes} />}
            rightCol={
              <Paper elevation={3} sx={{ height: "100%" }}>
                <CartOrder />
              </Paper>
            }
          />
        ) : (
          <Stack textAlign="center" gap="20px" justifyContent="center">
            <Typography variant="h4">{t("empty_cart")}</Typography>
            <Box>
              <Button component={Link} href={AppRoutes.home} variant="contained" size="small">
                {t("go_to_home_page_button_text")}
              </Button>
            </Box>
          </Stack>
        )}
      </>
    </Box>
  );
};

export default BlockCart;
