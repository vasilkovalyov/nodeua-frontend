import { AdminNodeType } from "@/app/entities/admin/admin-node";
import { ApiAdminEditNodeResponseType } from "./node.api.type";

export function adaptApiAdminEditNodeResponseType(props: ApiAdminEditNodeResponseType): AdminNodeType {
  const { _id, name, image, price, ip_node, id_node, key_node, max_duration_months, link, description } = props;
  return {
    _id: _id,
    name: name,
    image: image,
    price: price,
    ip_node: ip_node,
    id_node: id_node,
    key_node: key_node,
    description: description.description,
    max_duration_months: max_duration_months,
    type: description.type,
    site_link: link,
    twitter_link: description.twitter_link,
    github_link: description.github_link,
    telegram_link: description.telegram_link,
    guide_link: description.guide_link
  };
}
