import { NodeType } from "@/app/entities/node";
import { UserType } from "@/app/entities/user";

export type AdminBuyedNodeType = {
  _id: string;
  purchase_date: string;
  expiration_date: string;
  node: NodeType;
  user: Pick<UserType, "email"> & {
    _id: string;
  };
};
