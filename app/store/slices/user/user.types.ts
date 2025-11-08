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
  nodes: BuyedNodeType[];
};

export type GetExpiredNodesResponseType = {
  nodes: BuyedNodeType[];
};

export type CreateInvoiceProps = {
  amount: number;
  success_url: string;
  cancel_url: string;
  description?: string;
};

export type CreateInvoiceResponseProps = {
  cancel_url: string;
  collect_user_data: boolean;
  created_at: string;
  customer_email: null;
  id: string;
  invoice_url: string;
  ipn_callback_url: string;
  is_fee_paid_by_user: boolean;
  is_fixed_rate: boolean;
  order_description: string;
  order_id: string;
  partially_paid_url: null;
  pay_currency: string;
  paymentUrl: string;
  payout_currency: null;
  price_amount: string;
  price_currency: string;
  source: null;
  success_url: string;
  token_id: string;
  updated_at: string;
};
