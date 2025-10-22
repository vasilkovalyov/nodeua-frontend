"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/app/routing";
import { Box, Button, Paper, Skeleton, Stack, Typography } from "@mui/material";
import { AuthContainer, CartList, CartOrder } from "@/src/widgets/components";
import { useAppSelector } from "@/app/store/store";
import { getNodesFromCartSelector } from "@/app/store/slices/cart/cart.selectors";
import { AppRoutes } from "@/src/shared/routes";
import BlockCartTemplate from "./ui/block-cart-template/block-cart-template";

const BlockCart: FC = () => {
  const t = useTranslations();
  const nodes = useAppSelector(getNodesFromCartSelector);

  return (
    <Box flex="1">
      <AuthContainer
        auth={
          <>
            {nodes.length ? (
              <BlockCartTemplate
                leftCol={<CartList />}
                rightCol={
                  <Paper elevation={3} sx={{ height: "100%" }}>
                    <CartOrder />
                  </Paper>
                }
              />
            ) : (
              <Stack textAlign="center" gap="20px" justifyContent="center" minHeight={"50dvh"}>
                <Typography variant="h4">Your cart is empty. Let&apos;s add some nodes</Typography>
                <Box>
                  <Button component={Link} href={AppRoutes.home} variant="contained" size="small">
                    {t("go_to_home_page_button_text")}
                  </Button>
                </Box>
              </Stack>
            )}
          </>
        }
        notAuth={
          <Button component={Link} href={AppRoutes.home} variant="contained" size="small">
            {t("go_to_home_page_button_text")}
          </Button>
        }
        loader={
          <BlockCartTemplate
            leftCol={<Skeleton sx={{ height: "250px" }} />}
            rightCol={<Skeleton sx={{ height: "250px" }} />}
          />
        }
      />
    </Box>
  );
};

export default BlockCart;
