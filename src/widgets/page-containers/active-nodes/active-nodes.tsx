"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";

import { useGetActiveNodesQuery, useGetExpiredNodesQuery } from "@/app/store/slices/user/user.api";
import { Link } from "@/app/routing";
import { PageTitle } from "@/src/shared/ui";
import { AppRoutes } from "@/src/shared/routes";
import TableNodes from "./ui/table-nodes/table-nodes";

const ActiveNodesPageContainer: FC = () => {
  const t = useTranslations();

  const { data: activeNodes, isLoading: isLoadingActive } = useGetActiveNodesQuery();
  const { data: expiredNodes, isLoading: isLoadingExpired } = useGetExpiredNodesQuery();
  const isEmptyNodes = !activeNodes?.buyed_nodes.length || !expiredNodes?.buyed_nodes.length;

  return (
    <Stack gap="50px">
      <PageTitle titleTranslationKey="page_name_active_nodes" />

      {isLoadingActive || isLoadingExpired ? (
        <Stack gap="3px">
          <Skeleton sx={{ height: "56px", width: "100%", transform: "none" }} />
          <Skeleton sx={{ height: "74px", width: "100%", transform: "none" }} />
          <Skeleton sx={{ height: "74px", width: "100%", transform: "none" }} />
        </Stack>
      ) : (
        <Stack gap="50px">
          {isEmptyNodes ? (
            <>
              {activeNodes?.buyed_nodes.length ? <TableNodes nodes={activeNodes.buyed_nodes} type="active" /> : null}
              {expiredNodes?.buyed_nodes.length ? (
                <Stack gap="30px">
                  <PageTitle titleTranslationKey="page_name_expired_nodes" />
                  <TableNodes nodes={expiredNodes.buyed_nodes} type="inactive" />
                </Stack>
              ) : null}
            </>
          ) : (
            <Stack textAlign="center" gap="20px" justifyContent="center">
              <Typography variant="h4">{t("empty_nodes")}</Typography>
              <Box>
                <Button component={Link} href={AppRoutes.home} variant="contained" size="small">
                  {t("go_to_home_page_button_text")}
                </Button>
              </Box>
            </Stack>
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default ActiveNodesPageContainer;
