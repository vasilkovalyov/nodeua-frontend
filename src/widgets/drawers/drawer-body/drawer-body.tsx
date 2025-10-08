import { FC, ReactNode } from "react";

import { Box } from "@mui/material";

import "./drawer-body.scss";

type DrawerBodyProps = {
  children?: ReactNode;
};

const DrawerBody: FC<DrawerBodyProps> = ({ children }) => {
  return <Box className="drawer-body">{children}</Box>;
};

export default DrawerBody;
