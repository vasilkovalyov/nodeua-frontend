import { FC } from "react";

import { Table } from "@/src/shared/ui";

import TableUsersRow from "../admin-table-users-row/admin-table-users-row";
import { ADMIN_TABLE_USERS_HEAD_CELL } from "./admin-table-users.constant";
import { AdminTableUserProps } from "../../types/user.type";

type TableUsersProps = {
  users: AdminTableUserProps[];
};

const TableNodes: FC<TableUsersProps> = ({ users = [] }) => {
  return (
    <Table
      headCells={ADMIN_TABLE_USERS_HEAD_CELL}
      bodyCells={users}
      renderFormatRow={(props) => {
        return <TableUsersRow {...props} />;
      }}
    />
  );
};

export default TableNodes;
