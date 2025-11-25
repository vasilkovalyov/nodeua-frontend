import { NodeType } from "@/app/entities/node";
import { UserType } from "@/app/entities/user";

export type AdminBuyedNodeType = {
  _id: string;
  purchase_date: string;
  is_active: boolean;
  expiration_date: string;
  Node: Pick<NodeType, "_id" | "id_node" | "image" | "ip_node" | "key_node" | "name" | "price">;
  User: Pick<UserType, "email"> & {
    _id: string;
  };
};
