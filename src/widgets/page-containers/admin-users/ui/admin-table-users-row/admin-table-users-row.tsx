import { FC } from "react";

import { TableCell, Typography } from "@mui/material";

import { AdminTableUserProps } from "../../types/user.type";

type TableUsersRowProps = AdminTableUserProps;

const AdminTableUsersRow: FC<TableUsersRowProps> = ({ _id, email }) => {
  return (
    <>
      <TableCell>
        <Typography variant="body2" fontWeight={600}>
          {_id}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2" fontWeight={600}>
          {email}
        </Typography>
      </TableCell>
    </>
  );
};

export default AdminTableUsersRow;
