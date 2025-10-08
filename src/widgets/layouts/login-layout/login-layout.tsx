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
      <Container className="login-layout__container">
        <HeaderLogin />
        <Box component="main" className="login-layout__main">
          <Box component="section">
            <Box maxWidth="480px" mx="auto">
              {children}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginLayout;
