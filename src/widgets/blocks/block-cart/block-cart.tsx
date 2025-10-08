"use client";

import { FC } from "react";

import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { AuthContainer, CartList, CartOrder } from "@/src/widgets/components";
import { useAppSelector } from "@/app/store/store";
import { getNodesFromCartSelector } from "@/app/store/slices/cart/cart.selectors";

const BlockCart: FC = () => {
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
              <Typography>go to home page</Typography>
            )}
          </>
        }
        notAuth={<Typography>go to home page</Typography>}
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
