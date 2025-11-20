import { NodeType } from "@/app/entities/node";
import { getFormatedCurrency } from "@/src/shared/config/methods";
import { getCutLine } from "@/src/shared/utils/common";

type FormattedNodeField = {
  titleTranslationKey: string;
  value: string;
  isClipboard?: boolean;
};

export function getFormattedNodeFields(node: NodeType, idPurchase: string): FormattedNodeField[] {
  return [
    {
      titleTranslationKey: "id_purchase_node",
      value: idPurchase,
      isClipboard: true
    },
    {
      titleTranslationKey: "ip_node_label",
      value: node.ip_node,
      isClipboard: true
    },
    {
      titleTranslationKey: "key_node_label",
      value: getCutLine(node.key_node, 24),
      isClipboard: true
    },
    {
      titleTranslationKey: "price_label",
      value: getFormatedCurrency(node.price)
    }
  ];
}
