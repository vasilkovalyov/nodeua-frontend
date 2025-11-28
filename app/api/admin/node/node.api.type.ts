import { AdminNodeType } from "@/app/entities/admin/admin-node";

export type ApiAdminCreateNodeRequestType = Omit<AdminNodeType, "_id">;

export type ApiAdminCreateNodeResponseType = Pick<AdminNodeType, "_id">;

export type ApiAdminEditNodeRequestType = AdminNodeType;

export type ApiAdminEditNodeResponseType = {
  _id: string;
  name: string;
  image: string;
  price: number;
  link: string;
  max_duration_months: number;
  ip_node: string;
  id_node: string;
  key_node: string;
  description: {
    _id: string;
    description: string;
    short_description: string;
    type: string;
    site_link: string;
    twitter_link: string;
    github_link: string;
    telegram_link: string;
    guide_link: string;
  };
};
