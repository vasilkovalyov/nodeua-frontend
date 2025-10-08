import { FC } from "react";

import { Stack, CircularProgress } from "@mui/material";

const PageLoader: FC = () => {
  return (
    <Stack minHeight="500px" justifyContent="center" alignItems="center" width="100%">
      <CircularProgress />
    </Stack>
  );
};

export default PageLoader;
