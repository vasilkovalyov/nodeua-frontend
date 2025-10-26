import { ApiAdminCreateNodeRequestType, ApiAdminEditNodeRequestType } from "@/app/api/admin/node/node.api.type";
import { AdminNodeCreateFormProps } from "./admin-node.types";

export function adaptCreateNodePropsToApiRequest(props: AdminNodeCreateFormProps): ApiAdminCreateNodeRequestType {
  return {
    ...props,
    price: parseFloat(props.price),
    expiration_date: new Date(props.expiration_date).toISOString()
  };
}

export function adaptEditNodePropsToApiRequest(
  props: AdminNodeCreateFormProps,
  id: string
): ApiAdminEditNodeRequestType {
  return {
    ...props,
    _id: id,
    price: parseFloat(props.price),
    expiration_date: new Date(props.expiration_date).toISOString()
  };
}
