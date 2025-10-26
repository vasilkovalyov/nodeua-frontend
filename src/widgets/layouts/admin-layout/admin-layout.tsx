import { FC, ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { AdminHeader, AdminHeaderMobile } from "@/src/widgets/components";

import "./admin-layout.scss";

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <Box className="admin-layout">
      <AdminHeader />
      <AdminHeaderMobile />
      <Box component="main" className="admin-layout__main">
        <Box component="section" py="40px" flex="1">
          <Container>{children}</Container>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
