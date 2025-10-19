export type NodeType = {
  _id: string;
  name: string;
  image: string;
  price: number;
  link: string;
  is_active: boolean;
  guide: boolean;
  is_reneweble: boolean;
  is_soldout: boolean;
  max_duration: number;
  priority: number;
  ip_node: string;
};

export type NodeSingleType = NodeType & {
  description?: {
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
