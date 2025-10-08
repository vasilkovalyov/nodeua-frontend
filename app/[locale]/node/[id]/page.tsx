import { ReactElement } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { Box, Typography } from "@mui/material";
import { AppRoutes } from "@/src/shared/routes";
import AddNodeToCart from "@/src/widgets/components/add-node-to-cart/add-note-to-cart";
import { NodeSingleType } from "@/app/entities/node";
import { getFormatedCurrency } from "@/src/shared/config/methods";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function NodePage({ params }: { params: Promise<{ id: string }> }): Promise<ReactElement> {
  const { id } = await params;
  const response = await fetch(`http://localhost:8080/api/node/${id}`, {
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    redirect(AppRoutes.notFound);
  }

  const nodeResponseProps: NodeSingleType = await response.json();
  const { name, price_per_month, details, is_soldout } = nodeResponseProps;

  return (
    <Box>
      <Box>
        <Typography variant="h1">{name}</Typography>
        <Typography>Price per Month: $ {getFormatedCurrency(price_per_month)}</Typography>
        <AddNodeToCart
          isSoldout={is_soldout}
          node={{
            ...nodeResponseProps,
            quantity: 1,
            duration: 1
          }}
        />
        {details && <Typography>{details.type}</Typography>}
        {details && <div dangerouslySetInnerHTML={{ __html: details.description }} />}
      </Box>
      <Box component="aside">
        <Typography variant="h2">Funds raised</Typography>
        {details && <div dangerouslySetInnerHTML={{ __html: details.fundsraised }} />}
      </Box>
    </Box>
  );
}
