import { FC } from "react";
import { useTranslations } from "next-intl";
import dayjs from "dayjs";

import { Button, TableCell, Typography } from "@mui/material";

import { Link } from "@/app/routing";

import { AppRoutes } from "@/src/shared/routes";
import { DATES_FORMAT } from "@/src/shared/config/dates";
import { StatusNode } from "@/src/shared/ui";
import { AdminBuyedNodeType } from "../../types/admin-buyed-nodes.type";

type TableBuyedNodeRowProps = AdminBuyedNodeType;

const AdminTableBuyedNodeRow: FC<TableBuyedNodeRowProps> = ({
  _id,
  Node,
  User,
  purchase_date,
  expiration_date,
  is_active
}) => {
  const t = useTranslations();

  return (
    <>
      <TableCell>
        <Typography variant="body2" fontWeight={600}>
          {_id}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2" fontWeight={600}>
          {Node.name}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2" fontWeight={600}>
          {User.email}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2" fontWeight={600}>
          {dayjs(purchase_date).format(DATES_FORMAT.dateTextAndTime)}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2" fontWeight={600}>
          {dayjs(expiration_date).format(DATES_FORMAT.dateTextAndTime)}
        </Typography>
      </TableCell>
      <TableCell>
        <StatusNode isActive={is_active} />
      </TableCell>
      <TableCell>
        <Button component={Link} href={`${AppRoutes.adminBuyedNodes}/${_id}`} variant="contained">
          {t("details")}
        </Button>
      </TableCell>
    </>
  );
};

export default AdminTableBuyedNodeRow;
