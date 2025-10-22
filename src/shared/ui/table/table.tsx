import { ReactElement } from "react";
import cn from "classnames";
import { useTranslations } from "next-intl";

import { Table as MuiTable, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { TableProps } from "./table.type";

const Table = <T extends { _id: string }>({
  stickyHeader = false,
  headCells,
  bodyCells,
  renderFormatData,
  renderFormatRow,
  className
}: TableProps<T>): ReactElement => {
  const t = useTranslations();

  return (
    <TableContainer component={Paper} className={cn("table", className)}>
      <MuiTable stickyHeader={stickyHeader} className="table__inner">
        <TableHead className="table__thead">
          <TableRow>
            {headCells.map((cell, index) => (
              <TableCell key={index} className="table__cell-th">
                {cell.translationKey && t(cell.translationKey)}
                {cell.title && cell.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className="table__tbody">
          {bodyCells.map((obj) => {
            if (renderFormatRow) {
              return (
                <TableRow key={obj._id} className="table__row">
                  {renderFormatRow(obj)}
                </TableRow>
              );
            }
            return (
              <TableRow key={obj._id} className="table__row">
                <>
                  {renderFormatData &&
                    Object.values(renderFormatData(obj)).map((item, index) => {
                      if (obj._id !== item) {
                        return (
                          <TableCell key={index} className="table__cell-td">
                            {item}
                          </TableCell>
                        );
                      }
                      return null;
                    })}
                </>
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
