import { FC } from "react";

import { Stack, Typography } from "@mui/material";
import { CardList, NodeCard } from "@/src/shared/ui";
import { getTranslations } from "next-intl/server";
import { NodeType } from "@/app/entities/node";

type NodeCategoryType = "active" | "soldout" | "tba";

const BlockNodes: FC = async () => {
  const t = await getTranslations();

  const response = await fetch("http://localhost:8080/api/nodes", {
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    console.log("error", response.status);
  }

  const nodesList: Record<NodeCategoryType, NodeType[]> = await response.json();

  return (
    <Stack gap="40px">
      {Object.entries(nodesList).map(([category, nodes]) => (
        <Stack key={category} gap="40px">
          <Typography variant="h2" textAlign="center">
            {t(`${category}_node_category`)}
          </Typography>
          <CardList items={nodes} renderCard={(props) => <NodeCard {...props} />} />
        </Stack>
      ))}
    </Stack>
  );
};

export default BlockNodes;
