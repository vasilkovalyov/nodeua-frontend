import { AdminNodeCreateFormProps } from "../../admin-node.types";
import { AdminNodeCreateFieldProps } from "./admin-node-form.type";

const fullResponsive = {
  xs: 12
} as const;

const threeColResponsive = {
  xs: 12,
  sm: 6,
  xl: 4
} as const;

const fourColResponsive = {
  xs: 12,
  sm: 6,
  xl: 3
} as const;

const fiveColResponsive = {
  xs: 12,
  sm: 6,
  xl: 2
} as const;

export const ADMIN_NODE_FORM_FIELDS: AdminNodeCreateFieldProps[] = [
  {
    name: "name",
    type: "text",
    labelTranslationKey: "node_label",
    multiline: false,
    gridNumber: fourColResponsive
  },
  {
    name: "type",
    type: "text",
    labelTranslationKey: "type_label",
    multiline: false,
    gridNumber: fourColResponsive
  },
  {
    name: "price",
    type: "text",
    labelTranslationKey: "price_label",
    multiline: false,
    gridNumber: fiveColResponsive
  },
  {
    name: "max_duration_months",
    type: "number",
    labelTranslationKey: "max_duration_months_label",
    multiline: false,
    gridNumber: fiveColResponsive
  },
  {
    name: "expiration_date",
    type: "date",
    labelTranslationKey: "expiration_date_label",
    multiline: false,
    gridNumber: fiveColResponsive
  },
  {
    name: "ip_node",
    type: "text",
    labelTranslationKey: "ip_node_label",
    multiline: true,
    minRows: 2,
    gridNumber: threeColResponsive
  },
  {
    name: "id_node",
    type: "text",
    labelTranslationKey: "id_node_label",
    multiline: true,
    minRows: 2,
    gridNumber: threeColResponsive
  },
  {
    name: "key_node",
    type: "text",
    labelTranslationKey: "key_node_label",
    multiline: true,
    minRows: 2,
    gridNumber: threeColResponsive
  },
  {
    name: "image",
    type: "text",
    labelTranslationKey: "image_label",
    multiline: false,
    gridNumber: fullResponsive
  },
  {
    name: "description",
    type: "text",
    labelTranslationKey: "description_label",
    multiline: true,
    minRows: 2,
    gridNumber: fullResponsive
  },
  {
    name: "twitter_link",
    type: "text",
    labelTranslationKey: "twitter_link_label",
    multiline: true,
    minRows: 1,
    gridNumber: threeColResponsive
  },
  {
    name: "github_link",
    type: "text",
    labelTranslationKey: "github_link_label",
    multiline: true,
    minRows: 1,
    gridNumber: threeColResponsive
  },
  {
    name: "telegram_link",
    type: "text",
    labelTranslationKey: "telegram_link_label",
    multiline: true,
    minRows: 1,
    gridNumber: threeColResponsive
  },
  {
    name: "guide_link",
    type: "text",
    labelTranslationKey: "guide_link_label",
    multiline: true,
    minRows: 1,
    gridNumber: threeColResponsive
  },
  {
    name: "site_link",
    type: "text",
    labelTranslationKey: "site_link_label",
    multiline: true,
    minRows: 1,
    gridNumber: threeColResponsive
  }
];

export const adminNodeDefaultValue: AdminNodeCreateFormProps = {
  name: "",
  image: "",
  price: "0",
  ip_node: "",
  id_node: "",
  key_node: "",
  description: "",
  max_duration_months: 12,
  type: "",
  site_link: "",
  twitter_link: "",
  github_link: "",
  telegram_link: "",
  guide_link: "",
  expiration_date: ""
};
