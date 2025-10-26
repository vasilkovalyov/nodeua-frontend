import { AdminNodeType } from "@/app/entities/admin/admin-node";

export type AdminNodeCreateFormProps = Omit<AdminNodeType, "_id" | "price"> & {
  price: string;
};

export type AdminNodeEditFormProps = Omit<AdminNodeType, "price"> & {
  price: string;
};

export type AdminNodeCreateFieldName = keyof AdminNodeCreateFormProps;

export type AdminNodeFormType = "create" | "edit";
