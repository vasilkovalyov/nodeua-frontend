import { FC, ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { AppLogo } from "@/src/shared/ui";

type PageLayoutProps = {
  children: ReactNode;
};

const LoginLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Container>
        <AppLogo />
        <Box component="main">
          <Box>{children}</Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginLayout;
