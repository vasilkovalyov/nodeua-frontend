import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";

import { CardList, NodeCard } from "@/src/shared/ui";
import { BlockNodesProps } from "./block-nodes.type";
import { useTranslations } from "next-intl";

const BlockNodes: FC<BlockNodesProps> = ({ nodesList }) => {
  const t = useTranslations();
  if (nodesList === null) {
    return null;
  }

  return (
    <Stack gap="40px">
      {Object.entries(nodesList).map(([category, nodes]) => (
        <React.Fragment key={category}>
          {nodes.length ? (
            <Stack key={category} gap="40px">
              <Typography variant="h2" textAlign="center">
                {t(`${category}_node_category`)}
              </Typography>
              <CardList items={nodes} renderCard={(props) => <NodeCard {...props} />} />
            </Stack>
          ) : null}
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default BlockNodes;
