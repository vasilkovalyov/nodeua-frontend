import { createSelector } from "@reduxjs/toolkit";

import { CartState } from "./cart.types";
import { RootState } from "../../store";

const selectState = (state: RootState): CartState => state.cart;

export const getNodesFromCartSelector = createSelector(selectState, (state) => state.nodes);
