"use client";

import { FC } from "react";

import { Stack } from "@mui/material";
import { PageTitle, RootForm } from "@/src/shared/ui";

import AdminNodeForm from "./ui/admin-node-form/admin-node-form";

import { useAdminNode } from "./hooks/use-admin-node";
import { AdminNodeFormType } from "./admin-node.types";

const METHOD_TYPE: AdminNodeFormType = "create";

const AdminNodeCreatePageContainer: FC = () => {
  const { methods, isLoading, onSubmitCreateNode, onHandleChange } = useAdminNode({ methodType: METHOD_TYPE });

  return (
    <Stack gap="20px">
      <PageTitle titleTranslationKey="page_name_create_node" />
      <RootForm methods={methods} onSubmit={onSubmitCreateNode}>
        <AdminNodeForm isLoading={isLoading} onHandleChange={onHandleChange} methodType={METHOD_TYPE} />
      </RootForm>
    </Stack>
  );
};

export default AdminNodeCreatePageContainer;
