import { PaymentNodeType } from "@/app/entities/node";
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
  nodes: PaymentNodeType[];
};

export type GetExpiredNodesResponseType = {
  nodes: PaymentNodeType[];
};
