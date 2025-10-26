import { FC } from "react";

import { Table } from "@/src/shared/ui";

import TableNodesRow from "../admin-table-nodes-row/admin-table-nodes-row";
import { AdminNodeType } from "@/app/entities/admin/admin-node";
import { ADMIN_TABLE_NODES_HEAD_CELL } from "./admin-table-nodes.constant";

type TableNodesProps = {
  nodes: AdminNodeType[];
};

const TableNodes: FC<TableNodesProps> = ({ nodes = [] }) => {
  return (
    <Table
      headCells={ADMIN_TABLE_NODES_HEAD_CELL}
      bodyCells={nodes}
      renderFormatRow={(props) => {
        return <TableNodesRow {...props} />;
      }}
    />
  );
};

export default TableNodes;
