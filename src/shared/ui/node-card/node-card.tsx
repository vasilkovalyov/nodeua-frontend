import { FC } from "react";

import { Box, Button, Stack, Typography } from "@mui/material";
import { AppRoutes } from "@/src/shared/routes";
import AddNodeToCart from "@/src/widgets/components/add-node-to-cart/add-note-to-cart";
import { NodeType } from "@/app/entities/node";

type NodeCardProps = NodeType;

const NodeCard: FC<NodeCardProps> = (props) => {
  const { _id, name, image, price_per_month, is_soldout, is_tba } = props;
  return (
    <Box>
      <Typography variant="body1">{name}</Typography>
      <img src={`https://xnode.fra1.cdn.digitaloceanspaces.com/${image}`} alt={name} />
      {!is_tba ? (
        <Box>
          <Typography>${price_per_month}</Typography>
          <Stack direction="row" justifyContent="center">
            <Button href={`${AppRoutes.singleNode}/${_id}`}>More info</Button>
            <AddNodeToCart
              isSoldout={is_soldout}
              node={{
                ...props,
                quantity: 1,
                duration: 1
              }}
            />
          </Stack>
        </Box>
      ) : (
        <Typography>To Be Announced</Typography>
      )}
    </Box>
  );
};

export default NodeCard;
