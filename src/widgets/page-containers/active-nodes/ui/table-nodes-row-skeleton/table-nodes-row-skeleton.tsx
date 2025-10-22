import { FC } from "react";

import { Skeleton, TableCell } from "@mui/material";

const TableNodesRowSkeleton: FC = () => {
  return (
    <>
      <TableCell
        sx={{
          width: "40px",
          maxWidth: "40px"
        }}
      >
        <Skeleton sx={{ height: "30px", width: "40px", transform: "none" }} />
      </TableCell>
      <TableCell
        sx={{
          width: "140px"
        }}
      >
        <Skeleton sx={{ height: "30px", width: "140px", transform: "none" }} />
      </TableCell>
      <TableCell
        sx={{
          width: "140px"
        }}
      >
        <Skeleton sx={{ height: "30px", transform: "none" }} />
      </TableCell>
      <TableCell
        sx={{
          width: "260px",
          maxWidth: "260px"
        }}
      >
        <Skeleton sx={{ height: "30px", transform: "none" }} />
      </TableCell>
      <TableCell
        sx={{
          width: "150px",
          maxWidth: "150px"
        }}
      >
        <Skeleton sx={{ height: "30px", width: "150px", transform: "none" }} />
      </TableCell>
      <TableCell
        sx={{
          width: "70px",
          maxWidth: "70px"
        }}
      >
        <Skeleton sx={{ height: "30px", transform: "none" }} />
      </TableCell>
    </>
  );
};

export default TableNodesRowSkeleton;
