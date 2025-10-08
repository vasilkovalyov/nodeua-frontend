"use client";

import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/store";

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
  TextField
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { getNodesFromCartSelector } from "@/app/store/slices/cart/cart.selectors";
import { deleteNode, updateDurationNodes, updateQuantityNodes } from "@/app/store/slices/cart/cart.slice";
import { getFormatedCurrency } from "@/src/shared/config/methods";

const CartList: FC = () => {
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
              <TableCell component="th">Name</TableCell>
              <TableCell component="th">Per Month </TableCell>
              <TableCell component="th">Quantity</TableCell>
              <TableCell component="th">Duration</TableCell>
              <TableCell component="th">Deploy Type</TableCell>
              <TableCell component="th" />
            </TableRow>
          </TableHead>
          <TableBody>
            {nodes.map(({ _id, name, price_per_month, quantity, duration, max_duration }) => (
              <TableRow key={_id}>
                <TableCell>{name}</TableCell>
                <TableCell>$ {getFormatedCurrency(price_per_month)}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={quantity ?? 1}
                    onChange={(e) => onHandleChangeQuantity(_id, +e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Select
                    value={(duration ?? 1).toString()}
                    onChange={(e) => onHandleChangeMaxDuration(_id, +e.target.value)}
                  >
                    {Array.from(Array(max_duration).keys()).map((item: number) => (
                      <MenuItem key={item} value={item + 1}>
                        {item + 1} {item + 1 > 1 ? "months" : "month"}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>Deploy Type</TableCell>
                <TableCell>
                  <Button onClick={() => onHandleDeleteNode(_id)}>
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
