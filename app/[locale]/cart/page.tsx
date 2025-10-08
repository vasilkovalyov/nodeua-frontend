import { ReactElement } from "react";
import type { Metadata } from "next";

import { Box, Typography } from "@mui/material";

import { BlockCart } from "@/src/widgets/blocks";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function CartPage(): Promise<ReactElement> {
  return (
    <Box>
      <Typography variant="h1">Cart</Typography>
      <BlockCart />
    </Box>
  );
}
