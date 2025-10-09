import { FC } from "react";

import { Box, Typography } from "@mui/material";
import AddNodeToCart from "@/src/widgets/components/add-node-to-cart/add-note-to-cart";
import { getFormatedCurrency } from "@/src/shared/config/methods";
import { NodeSingleType } from "@/app/entities/node";
import { useTranslations } from "next-intl";

type NodeSingleContainerProps = NodeSingleType;

const NodeSingleContainer: FC<NodeSingleContainerProps> = (props) => {
  const t = useTranslations();

  const { name, price_per_month, is_soldout, details } = props;

  return (
    <Box>
      <Box>
        <Typography variant="h1">{name}</Typography>
        <Typography>
          {t("price_per_month")}: {getFormatedCurrency(price_per_month)}
        </Typography>
        <AddNodeToCart
          isSoldout={is_soldout}
          node={{
            ...props,
            quantity: 1,
            duration: 1
          }}
        />
        {details && <Typography>{details.type}</Typography>}
        {details && <div dangerouslySetInnerHTML={{ __html: details.description }} />}
      </Box>
      <Box component="aside">
        <Typography variant="h2">{t("funds_raised")}</Typography>
        {details && <div dangerouslySetInnerHTML={{ __html: details.fundsraised }} />}
      </Box>
    </Box>
  );
};

export default NodeSingleContainer;
