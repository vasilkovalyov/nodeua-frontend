import { FC } from "react";
import { Stack } from "@mui/material";
import { PageTitle } from "@/src/shared/ui";
import BlockCart from "./ui/block-cart/block-cart";

const CartPageContainer: FC = () => {
  return (
    <Stack gap="20px" minHeight="80dvh" direction="column">
      <PageTitle titleTranslationKey="page_name_cart" />
      <BlockCart />
    </Stack>
  );
};

export default CartPageContainer;
