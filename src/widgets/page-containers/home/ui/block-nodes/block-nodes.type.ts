import { NodeType } from "@/app/entities/node";

export type NodeCategoryType = "active" | "soldout";

export type NodesList = Record<NodeCategoryType, NodeType[]>;

export type BlockNodesProps = {
  nodesList: NodesList;
};
