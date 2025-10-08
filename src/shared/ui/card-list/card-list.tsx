import { ReactElement, ReactNode } from "react";
import { Grid } from "@mui/material";

type ResponsiveType = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

type CardListProps<T> = {
  items: T[];
  startCard?: ReactNode;
  renderCard?: (item: T) => ReactElement;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

const defaultResponsive: ResponsiveType = {
  xs: 12,
  sm: 12,
  md: 6,
  lg: 4,
  xl: 4
};

const CardList = <T extends { _id: string | number }>({
  items,
  renderCard,
  xs = defaultResponsive.xs,
  sm = defaultResponsive.sm,
  md = defaultResponsive.md,
  lg = defaultResponsive.lg,
  xl = defaultResponsive.xl
}: CardListProps<T>): ReactElement => {
  return (
    <Grid container spacing={2}>
      <>
        {items.map((item) => (
          <Grid item key={item._id} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            {renderCard?.(item)}
          </Grid>
        ))}
      </>
    </Grid>
  );
};

export default CardList;
