import { useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn } from "react-hook-form";

import { useAdminCreateNodeMutation, useAdminEditNodeMutation } from "@/app/api/admin/node/node.api";
import useSnackbar from "@/src/shared/hooks/use-snackbar";

import validationSchema from "../ui/admin-node-form/admin-node-form.validation";
import { adminNodeDefaultValue } from "../ui/admin-node-form/admin-node-form.constant";
import { adaptCreateNodePropsToApiRequest, adaptEditNodePropsToApiRequest } from "../admin-node-utils";
import { AdminNodeCreateFieldName, AdminNodeCreateFormProps, AdminNodeFormType } from "../admin-node.types";
import { ChangeEvent } from "react";

type UseAdminNodeReturnParams = {
  onSubmitCreateNode: (props: AdminNodeCreateFormProps) => Promise<void>;
  onSubmitEditNode: (props: AdminNodeCreateFormProps, id: string) => Promise<void>;
  onHandleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: AdminNodeCreateFieldName) => void;
  methods: UseFormReturn<AdminNodeCreateFormProps, any, undefined>;
  isLoading: boolean;
};

type UseAdminNodeProps = {
  methodType: AdminNodeFormType;
};

export function useAdminNode({ methodType }: UseAdminNodeProps): UseAdminNodeReturnParams {
  const t = useTranslations();
  const [createNode, { isLoading: isLoadingCreation }] = useAdminCreateNodeMutation();
  const [editNode, { isLoading: isLoadingEditing }] = useAdminEditNodeMutation();
  const { showSnackbar } = useSnackbar();

  const methods = useForm<AdminNodeCreateFormProps>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
    defaultValues: adminNodeDefaultValue
  });
  const { setValue, reset } = methods;

  async function onSubmitCreateNode(params: AdminNodeCreateFormProps): Promise<void> {
    await createNode(adaptCreateNodePropsToApiRequest(params))
      .unwrap()
      .then(() => {
        showSnackbar({ title: t("node_create_success"), color: "success" });
        reset();
      })
      .catch(() => {
        showSnackbar({ title: t("node_create_error"), verticalPosition: "bottom" });
      });
  }

  async function onSubmitEditNode(params: AdminNodeCreateFormProps, id: string): Promise<void> {
    await editNode(adaptEditNodePropsToApiRequest(params, id))
      .unwrap()
      .then(() => {
        showSnackbar({ title: t("node_edit_success"), color: "success" });
      })
      .catch(() => {
        showSnackbar({ title: t("node_edit_error"), verticalPosition: "bottom" });
      });
  }

  function onHandleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: AdminNodeCreateFieldName
  ): void {
    if (type === "max_duration_months") {
      onHandleChangeMonths(e);
    }
  }

  function onHandleChangeMonths(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const value = e.currentTarget.value;
    if (value.length === 0 || value === "0") {
      setValue("max_duration_months", 0);
    }
  }

  return {
    onSubmitCreateNode,
    onSubmitEditNode,
    onHandleChange,
    methods,
    isLoading: methodType === "create" ? isLoadingCreation : isLoadingEditing
  };
}
