import { FC } from "react";
import { Box, Container } from "@mui/material";
import { AppLogo } from "@/src/shared/ui";

import "./header-login.scss";

const HeaderLogin: FC = () => {
  return (
    <Box component="header" className="header-login">
      <Container>
        <AppLogo />
      </Container>
    </Box>
  );
};

export default HeaderLogin;
