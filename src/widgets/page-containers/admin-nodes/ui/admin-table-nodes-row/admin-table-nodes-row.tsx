"use client";

import { FC } from "react";
import Image from "next/image";

import { Link } from "@/app/routing";
import { TableCell, Typography, Button } from "@mui/material";

import { getFormatedCurrency } from "@/src/shared/config/methods";
import { AdminNodeType } from "@/app/entities/admin/admin-node";
import { useTranslations } from "next-intl";
import { AppRoutes } from "@/src/shared/routes";

type TableNodesRowProps = AdminNodeType;

const AdminTableNodesRow: FC<TableNodesRowProps> = ({ _id, image, name, price }) => {
  const t = useTranslations();

  return (
    <>
      <TableCell>
        <Image src={image} alt={name} loading="lazy" width={40} height={40} />
      </TableCell>
      <TableCell>
        <Typography variant="body2" fontWeight={600}>
          {name}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2" fontWeight={600}>
          {getFormatedCurrency(price)}
        </Typography>
      </TableCell>
      <TableCell>
        <Button component={Link} href={`${AppRoutes.adminNodes}/${_id}`} variant="contained">
          {t("details")}
        </Button>
      </TableCell>
    </>
  );
};

export default AdminTableNodesRow;
