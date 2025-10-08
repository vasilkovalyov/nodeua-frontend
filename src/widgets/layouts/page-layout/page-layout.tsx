import { FC, ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { Header } from "@/src/widgets/components";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box component="main">
        <Box component="section">
          <Container>{children}</Container>
        </Box>
      </Box>
    </Box>
  );
};

export default PageLayout;
