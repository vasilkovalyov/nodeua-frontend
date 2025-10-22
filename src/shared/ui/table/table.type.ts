import { ReactElement } from "react";

export type TableHeadCellProps = {
  translationKey?: string;
  title?: string;
};

export type TableProps<T extends { _id: string }> = {
  stickyHeader?: boolean;
  headCells: TableHeadCellProps[];
  bodyCells: T[];
  renderFormatData?: (obj: T) => object;
  renderFormatRow?: (obj: T) => ReactElement;
  className?: string;
};
