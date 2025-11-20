import { NodeType } from "@/app/entities/node";
import { UserType } from "@/app/entities/user";

export type AdminBuyedNodeType = {
  _id: string;
  purchase_date: string;
  expiration_date: string;
  node: Pick<NodeType, "_id" | "id_node" | "image" | "ip_node" | "key_node" | "name" | "price">;
  user: Pick<UserType, "email"> & {
    _id: string;
  };
};
