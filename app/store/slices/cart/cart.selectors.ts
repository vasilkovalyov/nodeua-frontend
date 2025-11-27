import { createSelector } from "@reduxjs/toolkit";

import { CartState } from "./cart.types";
import { RootState } from "../../store";

const selectState = (state: RootState): CartState => state.cart;

export const getCartLoadingState = createSelector(selectState, (state) => state.isLoading);
export const getCartTotalAmountState = createSelector(selectState, (state) => state.totalAmount);
export const getCartNodesState = createSelector(selectState, (state) => state.nodes);
