import { TableHeadCellProps } from "@/src/shared/ui/table/table.type";

export const TABLE_ACTIVE_NODES_HEAD_CELL: TableHeadCellProps[] = [
  {
    translationKey: "cart_table_head_image"
  },
  {
    translationKey: "cart_table_head_name"
  },
  {
    translationKey: "price"
  },
  {
    title: "Id"
  },
  {
    translationKey: "cart_table_head_expiration_date"
  },
  {}
];

export const TABLE_INACTIVE_NODES_HEAD_CELL: TableHeadCellProps[] = [
  {
    translationKey: "cart_table_head_image"
  },
  {
    translationKey: "cart_table_head_name"
  },
  {
    translationKey: "price"
  },
  {
    title: "Id"
  },
  {
    title: ""
  },
  {}
];
