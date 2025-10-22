import { BuyedNodeType } from "@/app/entities/node";
import { UserType } from "@/app/entities/user";

export type UserState = {
  profile: UserType;
};

export type NodePaymentApiRequest = {
  nodes: NodePaymentCartType[];
};

export type NodePaymentCartType = {
  _id: string;
  price: number;
  months: number;
  quantity: number;
};

export type GetActiveNodesResponseType = {
  buyed_nodes: BuyedNodeType[];
};

export type GetExpiredNodesResponseType = {
  buyed_nodes: BuyedNodeType[];
};
