"use client";

import { FC } from "react";

import { Skeleton, Stack } from "@mui/material";

import { useGetActiveNodesQuery, useGetExpiredNodesQuery } from "@/app/store/slices/user/user.api";
import { PageTitle, Table } from "@/src/shared/ui";
import TableNodes from "./ui/table-nodes/table-nodes";
import { getRowSkeletonItems } from "./ui/table-nodes/table-nodes.utils";
import TableNodesRowSkeleton from "./ui/table-nodes-row-skeleton/table-nodes-row-skeleton";
import { TABLE_ACTIVE_NODES_HEAD_CELL, TABLE_INACTIVE_NODES_HEAD_CELL } from "./ui/table-nodes/table-nodes.constant";

const ActiveNodesPageContainer: FC = () => {
  const { data: activeNodes, isLoading: isLoadingActive } = useGetActiveNodesQuery();
  const { data: expiredNodes, isLoading: isLoadingExpired } = useGetExpiredNodesQuery();

  return (
    <Stack gap="50px">
      <Stack gap="20px">
        {isLoadingActive ? (
          <>
            <Skeleton sx={{ height: "30px", width: "100%", transform: "none" }} />
            <Table
              headCells={TABLE_ACTIVE_NODES_HEAD_CELL}
              bodyCells={getRowSkeletonItems(2)}
              renderFormatRow={() => {
                return <TableNodesRowSkeleton />;
              }}
            />
          </>
        ) : (
          <>
            {activeNodes?.buyed_nodes.length ? (
              <>
                <PageTitle titleTranslationKey="page_name_active_nodes" />
                <TableNodes nodes={activeNodes.buyed_nodes} type="active" />
              </>
            ) : null}
          </>
        )}
      </Stack>
      <Stack gap="20px">
        {isLoadingExpired ? (
          <>
            <Skeleton sx={{ height: "30px", width: "100%", transform: "none" }} />
            <Table
              headCells={TABLE_INACTIVE_NODES_HEAD_CELL}
              bodyCells={getRowSkeletonItems(2)}
              renderFormatRow={() => {
                return <TableNodesRowSkeleton />;
              }}
            />
          </>
        ) : (
          <>
            {expiredNodes?.buyed_nodes.length ? (
              <>
                <PageTitle titleTranslationKey="page_name_expired_nodes" />
                <TableNodes nodes={expiredNodes.buyed_nodes} type="inactive" />
              </>
            ) : null}
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default ActiveNodesPageContainer;
