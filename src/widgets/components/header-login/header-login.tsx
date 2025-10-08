import { FC } from "react";
import { Box, Container } from "@mui/material";
import { AppLogo } from "@/src/shared/ui";

const HeaderLogin: FC = () => {
  return (
    <Box component="header">
      <Container>
        <AppLogo />
      </Container>
    </Box>
  );
};

export default HeaderLogin;
