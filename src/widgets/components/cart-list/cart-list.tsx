"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";

import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { getNodesFromCartSelector } from "@/app/store/slices/cart/cart.selectors";
import { deleteNode, updateDurationNodes, updateQuantityNodes } from "@/app/store/slices/cart/cart.slice";
import { getFormatedCurrency } from "@/src/shared/config/methods";

const CartList: FC = () => {
  const t = useTranslations();
  const nodes = useAppSelector(getNodesFromCartSelector);
  const dispatch = useAppDispatch();

  function onHandleChangeQuantity(id: string, quantity: number): void {
    dispatch(
      updateQuantityNodes({
        _id: id,
        quantity: quantity
      })
    );
  }

  function onHandleChangeMaxDuration(id: string, duration: number): void {
    dispatch(
      updateDurationNodes({
        _id: id,
        duration: duration
      })
    );
  }

  function onHandleDeleteNode(id: string): void {
    dispatch(
      deleteNode({
        id
      })
    );
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th">{t("cart_table_head_name")}</TableCell>
              <TableCell component="th">{t("cart_table_head_month")} </TableCell>
              <TableCell component="th">{t("cart_table_head_quantity")}</TableCell>
              <TableCell component="th">{t("cart_table_head_duration")}</TableCell>
              <TableCell component="th" />
            </TableRow>
          </TableHead>
          <TableBody>
            {nodes.map(({ _id, name, price, quantity, duration, max_duration }) => (
              <TableRow key={_id}>
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
                  <TextField
                    type="number"
                    size="small"
                    fullWidth
                    value={quantity ?? 1}
                    onChange={(e) => onHandleChangeQuantity(_id, +e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Select
                    value={(duration ?? 1).toString()}
                    size="small"
                    fullWidth
                    onChange={(e) => onHandleChangeMaxDuration(_id, +e.target.value)}
                  >
                    {Array.from(Array(max_duration).keys()).map((item: number) => (
                      <MenuItem key={item} value={item + 1}>
                        {item + 1} {item + 1 > 1 ? t("months") : t("month")}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <Button variant="contained" size="small" onClick={() => onHandleDeleteNode(_id)}>
                    <ClearIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CartList;
