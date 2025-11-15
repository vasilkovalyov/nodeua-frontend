import { NodeType } from "@/app/entities/node";

export type NodeCategoryType = "active" | "soldout" | "tba";

export type NodesList = Record<NodeCategoryType, NodeType[]>;

export type BlockNodesProps = {
  nodesList: NodesList;
};
