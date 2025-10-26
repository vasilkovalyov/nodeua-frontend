export type NodeType = {
  _id: string;
  name: string;
  image: string;
  price: number;
  is_active: boolean;
  guide: boolean;
  is_reneweble: boolean;
  is_soldout: boolean;
  max_duration_months: number;
  max_duration_days: number;
  priority: number;
  ip_node: string;
  id_node: string;
  key_node: string;
};

export type NodeSingleType = NodeType & {
  description?: {
    description: string;
    type: string;
    site_link: string;
    twitter_link: string;
    github_link: string;
    telegram_link: string;
    guide_link: string;
  };
};

export type BuyedNodeType = Pick<NodeType, "_id" | "image" | "name" | "price" | "id_node" | "key_node"> & {
  expiration_date: string;
};
