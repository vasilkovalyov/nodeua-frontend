import { FC } from "react";

import { Stack, Typography } from "@mui/material";
import { CardList, NodeCard } from "@/src/shared/ui";
import { getTranslations } from "next-intl/server";
import { NodeType } from "@/app/entities/node";
import { serverSideFetch } from "@/app/api/server-side-api";
import React from "react";

type NodeCategoryType = "active" | "soldout" | "tba";

const BlockNodes: FC = async () => {
  const t = await getTranslations();

  const response = await serverSideFetch("/nodes", {
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    console.log("error", response.status);
  }

  const nodesList: Record<NodeCategoryType, NodeType[]> = await response.json();

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
