import { FC } from "react";

import { Box } from "@mui/material";

import { PageTitle } from "@/src/shared/ui";

const ActiveNodesPageContainer: FC = () => {
  return (
    <Box>
      <PageTitle titleTranslationKey="page_name_active_nodes" />
    </Box>
  );
};

export default ActiveNodesPageContainer;
