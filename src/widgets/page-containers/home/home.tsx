import { FC } from "react";

import BlockNodes from "./ui/block-nodes/block-nodes";
import { NodesList } from "./ui/block-nodes/block-nodes.type";

type HomePageContainerProps = {
  nodes: NodesList | null;
};

const HomePageContainer: FC<HomePageContainerProps> = ({ nodes }) => {
  return <BlockNodes nodesList={nodes} />;
};

export default HomePageContainer;
