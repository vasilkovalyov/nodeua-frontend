"use client";

import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/app/routing";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";

import { AppRoutes } from "@/src/shared/routes";
import AddNodeToCart from "@/src/widgets/components/add-node-to-cart/add-note-to-cart";
import { NodeType } from "@/app/entities/node";
import { getFormatedCurrency } from "../../config/methods";

type NodeCardProps = NodeType;

const NodeCard: FC<NodeCardProps> = (props) => {
  const t = useTranslations();

  const { _id, name, image, price, is_soldout } = props;
  return (
    <Card>
      <Box textAlign="center">
        <Image src={image} alt={name} loading="lazy" width={140} height={140} />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        {price && <Typography variant="body2">{getFormatedCurrency(price)}</Typography>}
      </CardContent>
      <CardActions
        sx={{
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        <Button variant="outlined" size="small" component={Link} href={`${AppRoutes.userSingleNode}/${_id}`}>
          {t("more_info")}
        </Button>
        <Box
          sx={{
            margin: "0  !important"
          }}
        >
          <AddNodeToCart
            isSoldout={is_soldout}
            node={{
              ...props,
              quantity: 1,
              duration: 1
            }}
          />
        </Box>
      </CardActions>
    </Card>
  );
};

export default NodeCard;
