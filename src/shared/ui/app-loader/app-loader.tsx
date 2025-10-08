import { ReactElement } from "react";
import { Box, CircularProgress } from "@mui/material";

import "./app-loader.scss";

function AppLoader(): ReactElement {
  return (
    <Box>
      <CircularProgress />
    </Box>
  );
}

export default AppLoader;
