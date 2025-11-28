import { FC } from "react";
import Image from "next/image";
import dayjs from "dayjs";

import { Button, TableCell, Typography, Stack } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { useTranslations } from "next-intl";

import { BuyedNodeType } from "@/app/entities/node";
import { getFormatedCurrency } from "@/src/shared/config/methods";
import { CopyClipboard } from "@/src/widgets/components";
import { DATES_FORMAT } from "@/src/shared/config/dates";
import { getDaysCountBetweenDates } from "@/src/shared/utils/common";

type TableNodesRowProps = BuyedNodeType & {
  type: "active" | "inactive";
  onHandleShowKeyNode: (keyNode: string) => void;
};

const DAYS_COUNT_NOTIFIED = 10;

const TableNodesRow: FC<TableNodesRowProps> = ({ _id, node, type, expiration_date, onHandleShowKeyNode }) => {
  const nowDate = new Date();
  const t = useTranslations();
  const daysCount = getDaysCountBetweenDates(nowDate, new Date(expiration_date));

  return (
    <>
      <TableCell
        sx={{
          width: "40px",
          maxWidth: "40px"
        }}
      >
        <Image src={node.image} alt={node.name} loading="lazy" width={40} height={40} />
      </TableCell>
      <TableCell
        sx={{
          width: "140px"
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          {node.name}
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          width: "140px"
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          {getFormatedCurrency(node.price)}
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          width: "260px",
          maxWidth: "260px"
        }}
      >
        <Stack direction="row" gap="10px" alignItems="center">
          <Typography variant="body2" fontWeight={600}>
            {_id}
          </Typography>
          <CopyClipboard value={_id} />
        </Stack>
      </TableCell>
      <TableCell
        sx={{
          width: "140px"
        }}
      >
        {type === "active" && (
          <Stack direction="row" gap="10px" alignItems="center">
            {daysCount > DAYS_COUNT_NOTIFIED ? (
              <Typography variant="body2" fontWeight={600}>
                {dayjs(expiration_date).format(DATES_FORMAT.dateTextAndTime)}
              </Typography>
            ) : (
              <Typography variant="body2" color="error">
                {daysCount} {daysCount < 2 ? t("day") : t("days_left")} {t("expiration_time_left")}
              </Typography>
            )}
          </Stack>
        )}
      </TableCell>
      <TableCell
        sx={{
          width: "70px",
          maxWidth: "70px",
          textAlign: "right"
        }}
      >
        <Button variant="contained" size="small" onClick={() => onHandleShowKeyNode(node.key_node)}>
          <KeyIcon />
        </Button>
      </TableCell>
    </>
  );
};

export default TableNodesRow;
