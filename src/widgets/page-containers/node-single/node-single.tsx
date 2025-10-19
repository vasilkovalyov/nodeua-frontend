import { FC } from "react";

import { Box, Typography } from "@mui/material";
import AddNodeToCart from "@/src/widgets/components/add-node-to-cart/add-note-to-cart";
import { getFormatedCurrency } from "@/src/shared/config/methods";
import { NodeSingleType } from "@/app/entities/node";
import { useTranslations } from "next-intl";

type NodeSingleContainerProps = NodeSingleType;

const NodeSingleContainer: FC<NodeSingleContainerProps> = (props) => {
  const t = useTranslations();

  const { name, price, is_soldout, description } = props;

  return (
    <Box>
      <Box>
        <Typography variant="h1">{name}</Typography>
        {price && (
          <Typography>
            {t("price")}: {getFormatedCurrency(price)}
          </Typography>
        )}
        <AddNodeToCart
          isSoldout={is_soldout}
          node={{
            ...props,
            quantity: 1,
            duration: 1
          }}
        />
        {description && <Typography>{description.type}</Typography>}
        {description && <div dangerouslySetInnerHTML={{ __html: description.description }} />}
      </Box>
    </Box>
  );
};

export default NodeSingleContainer;
