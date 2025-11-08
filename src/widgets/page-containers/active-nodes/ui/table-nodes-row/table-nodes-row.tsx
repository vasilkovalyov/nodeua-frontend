import { FC } from "react";
import Image from "next/image";
import dayjs from "dayjs";

import { Button, TableCell, Typography, Stack } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";

import { BuyedNodeType } from "@/app/entities/node";
import { getFormatedCurrency } from "@/src/shared/config/methods";
import { CopyClipboard } from "@/src/widgets/components";
import { DATES_FORMAT } from "@/src/shared/config/dates";

type TableNodesRowProps = BuyedNodeType & {
  type: "active" | "inactive";
  onHandleShowKeyNode: (keyNode: string) => void;
};

const TableNodesRow: FC<TableNodesRowProps> = ({
  id_node,
  expiration_date,
  image,
  key_node,
  name,
  price,
  type,
  onHandleShowKeyNode
}) => {
  return (
    <>
      <TableCell
        sx={{
          width: "40px",
          maxWidth: "40px"
        }}
      >
        <Image src={image} alt={name} loading="lazy" width={40} height={40} />
      </TableCell>
      <TableCell
        sx={{
          width: "140px"
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          {name}
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          width: "140px"
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          {getFormatedCurrency(price)}
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
            {id_node}
          </Typography>
          <CopyClipboard value={id_node} />
        </Stack>
      </TableCell>
      <TableCell
        sx={{
          width: "140px"
        }}
      >
        {type === "active" && (
          <Stack direction="row" gap="10px" alignItems="center">
            <Typography variant="body2" fontWeight={600}>
              {dayjs(expiration_date).format(DATES_FORMAT.dateTextAndTime)}
            </Typography>
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
        <Button variant="contained" size="small" onClick={() => onHandleShowKeyNode(key_node)}>
          <KeyIcon />
        </Button>
      </TableCell>
    </>
  );
};

export default TableNodesRow;
