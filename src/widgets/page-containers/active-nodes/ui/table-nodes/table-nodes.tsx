"use client";

import { FC } from "react";

import { Table } from "@/src/shared/ui";

import { BuyedNodeType } from "@/app/entities/node";
import useDialog from "@/src/shared/hooks/use-dialog";

import { TABLE_ACTIVE_NODES_HEAD_CELL, TABLE_INACTIVE_NODES_HEAD_CELL } from "./table-nodes.constant";
import TableNodesRow from "../table-nodes-row/table-nodes-row";

type TableNodesProps = {
  nodes: BuyedNodeType[];
  type: "active" | "inactive";
};

const TableNodes: FC<TableNodesProps> = ({ nodes = [], type }) => {
  const { onOpenDialog } = useDialog();

  const headCells = type === "active" ? TABLE_ACTIVE_NODES_HEAD_CELL : TABLE_INACTIVE_NODES_HEAD_CELL;

  function onHandleOpenDialog(keyNode: string): void {
    onOpenDialog({
      dialogName: "UNICHAIN_DIALOG",
      dialogProps: {
        keyNode: keyNode
      }
    });
  }

  return (
    <Table
      headCells={headCells}
      bodyCells={nodes}
      renderFormatRow={(props) => {
        return <TableNodesRow key={props._id} {...props} type={type} onHandleShowKeyNode={onHandleOpenDialog} />;
      }}
    />
  );
};

export default TableNodes;
