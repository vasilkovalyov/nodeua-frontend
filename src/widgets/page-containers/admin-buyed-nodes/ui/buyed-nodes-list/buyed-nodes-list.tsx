"use client";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";

import { Stack, TextField } from "@mui/material";
import { Table } from "@/src/shared/ui";
import { AdminBuyedNodeType } from "../../types/admin-buyed-nodes.type";
import AdminTableBuyedNodeRow from "../buyed-node-row/buyed-node-row";
import { ADMIN_TABLE_BUYED_NODES_HEAD_CELL } from "./buyed-nodes-list.constant";

type BuyedNodesListProps = {
  nodes: AdminBuyedNodeType[];
};

const BuyedNodesList: FC<BuyedNodesListProps> = ({ nodes }) => {
  const t = useTranslations();

  const [filteredNodes, setFilteredNodes] = useState<AdminBuyedNodeType[]>(nodes);

  function onHandleSearch(searchValue: string): void {
    if (!searchValue.length) {
      setFilteredNodes(nodes);
      return;
    }

    const filterNodes = nodes.filter((node) => {
      if (node._id.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
        return node;
      }
    });
    setFilteredNodes(filterNodes);
  }

  return (
    <Stack gap="50px">
      <TextField
        fullWidth
        size="small"
        placeholder={t("search_nodes")}
        onChange={(e) => onHandleSearch(e.target.value)}
      />
      <Table
        headCells={ADMIN_TABLE_BUYED_NODES_HEAD_CELL}
        bodyCells={filteredNodes}
        renderFormatRow={(props) => {
          return <AdminTableBuyedNodeRow {...props} />;
        }}
      />
    </Stack>
  );
};

export default BuyedNodesList;
