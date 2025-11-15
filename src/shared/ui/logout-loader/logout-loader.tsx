import { FC, ReactElement } from "react";
import { Box, CircularProgress } from "@mui/material";

import "./logout-loader.scss";

const LogoutLoader: FC = (): ReactElement => {
  return (
    <Box className="logout-loader">
      <CircularProgress />
    </Box>
  );
};

export default LogoutLoader;
