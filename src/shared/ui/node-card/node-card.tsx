import { FC } from "react";

import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { AppRoutes } from "@/src/shared/routes";
import AddNodeToCart from "@/src/widgets/components/add-node-to-cart/add-note-to-cart";
import { NodeType } from "@/app/entities/node";
import { useTranslations } from "next-intl";
import { getFormatedCurrency } from "../../config/methods";
import Image from "next/image";

type NodeCardProps = NodeType;

const NodeCard: FC<NodeCardProps> = (props) => {
  const t = useTranslations();

  const { _id, name, image, price_per_month, is_soldout, is_tba } = props;
  return (
    <Card>
      <Box textAlign="center">
        <Image src={image} alt={name} loading="lazy" width={140} height={140} />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">{getFormatedCurrency(price_per_month)}</Typography>
      </CardContent>
      <CardActions>
        {!is_tba ? (
          <>
            <Button variant="outlined" size="small" href={`${AppRoutes.singleNode}/${_id}`}>
              More info
            </Button>
            <AddNodeToCart
              isSoldout={is_soldout}
              node={{
                ...props,
                quantity: 1,
                duration: 1
              }}
            />
          </>
        ) : (
          <Typography>{t("announced")}</Typography>
        )}
      </CardActions>
    </Card>
  );
};

export default NodeCard;
