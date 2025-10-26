import { FC } from "react";

import { Link } from "@/app/routing";
import { Typography } from "@mui/material";
import { AppRoutes } from "../../routes";

import "./admin-logo.scss";

const AdminLogo: FC = () => {
  return (
    <Link href={AppRoutes.admin} className="admin-logo">
      <Typography variant="h1">Admin</Typography>
    </Link>
  );
};

export default AdminLogo;
