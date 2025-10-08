import { FC, ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { HeaderLogin } from "@/src/widgets/components";

import "./login-layout.scss";

type PageLayoutProps = {
  children: ReactNode;
};

const LoginLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box className="login-layout">
      <HeaderLogin />
      <Box component="main" className="login-layout__main">
        <Box component="section" py="60px">
          <Container className="login-layout__container">{children}</Container>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginLayout;
