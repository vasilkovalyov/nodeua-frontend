import { FC } from "react";

import { Stack, CircularProgress } from "@mui/material";

const PageLoader: FC = () => {
  return (
    <Stack>
      <CircularProgress />
    </Stack>
  );
};

export default PageLoader;
