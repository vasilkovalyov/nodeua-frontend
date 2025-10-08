"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/app/routing";
import { Box, Skeleton, Stack, Button } from "@mui/material";
import { AuthContainer, CartList, CartOrder } from "@/src/widgets/components";
import { useAppSelector } from "@/app/store/store";
import { getNodesFromCartSelector } from "@/app/store/slices/cart/cart.selectors";
import { AppRoutes } from "@/src/shared/routes";

const BlockCart: FC = () => {
  const t = useTranslations();
  const nodes = useAppSelector(getNodesFromCartSelector);

  return (
    <Box>
      <AuthContainer
        auth={
          <>
            {nodes.length ? (
              <Box>
                <Box>
                  <CartList />
                </Box>
                <Box component="aside">
                  <CartOrder />
                </Box>
              </Box>
            ) : (
              <Button component={Link} href={AppRoutes.home} variant="contained" size="small">
                {t("go_to_home_page_button_text")}
              </Button>
            )}
          </>
        }
        notAuth={
          <Button component={Link} href={AppRoutes.home} variant="contained" size="small">
            {t("go_to_home_page_button_text")}
          </Button>
        }
        loader={
          <Stack>
            <Skeleton />
          </Stack>
        }
      />
    </Box>
  );
};

export default BlockCart;
