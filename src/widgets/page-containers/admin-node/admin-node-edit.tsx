"use client";

import { FC, useEffect } from "react";

import { Stack } from "@mui/material";
import { AdminNodeType } from "@/app/entities/admin/admin-node";
import { PageTitle, RootForm } from "@/src/shared/ui";

import { AdminNodeFormType } from "./admin-node.types";
import { useAdminNode } from "./hooks/use-admin-node";
import AdminNodeForm from "./ui/admin-node-form/admin-node-form";

type AdminNodeEditPageContainerProps = {
  id: string;
  node: AdminNodeType | null;
};

const METHOD_TYPE: AdminNodeFormType = "edit";

const AdminNodeEditPageContainer: FC<AdminNodeEditPageContainerProps> = ({ node, id }) => {
  const { methods, isLoading, onSubmitEditNode, onHandleChange } = useAdminNode({ methodType: METHOD_TYPE });
  const { setValue } = methods;

  useEffect(() => {
    if (node === undefined || node === null) return;
    fillForm(node);
  }, [node]);

  function fillForm(nodeProps: AdminNodeType): void {
    setValue("name", nodeProps.name);
    setValue("image", nodeProps.image);
    setValue("price", nodeProps.price.toString());
    setValue("ip_node", nodeProps.ip_node);
    setValue("id_node", nodeProps.id_node);
    setValue("key_node", nodeProps.key_node);
    setValue("description", nodeProps.description);
    setValue("max_duration_months", nodeProps.max_duration_months);
    setValue("type", nodeProps.type);
    setValue("site_link", nodeProps.site_link);
    setValue("twitter_link", nodeProps.twitter_link);
    setValue("github_link", nodeProps.github_link);
    setValue("telegram_link", nodeProps.telegram_link);
    setValue("guide_link", nodeProps.guide_link);
  }

  return (
    <Stack gap="20px">
      <PageTitle titleTranslationKey="edit_node" />
      <RootForm methods={methods} onSubmit={(props) => onSubmitEditNode(props, id)}>
        <AdminNodeForm isLoading={isLoading} onHandleChange={onHandleChange} methodType={METHOD_TYPE} />
      </RootForm>
    </Stack>
  );
};

export default AdminNodeEditPageContainer;
