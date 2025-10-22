import { FC, ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { Header, HeaderMobile } from "@/src/widgets/components";

import "./page-layout.scss";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box className="page-layout">
      <Header />
      <HeaderMobile />
      <Box component="main" className="page-layout__main">
        <Box component="section" py="40px" flex="1">
          <Container>{children}</Container>
        </Box>
      </Box>
    </Box>
  );
};

export default PageLayout;
