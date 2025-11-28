import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "./cart.types";
import { CartNodeDurationType, CartNodeQuantityType, CartNodeType } from "./cart.type";
import LocalStorageCartService from "@/src/shared/services/local-storage-cart";
import { NodeType } from "@/app/entities/node";
import { calcTotalAmount } from "./cart.utils";

const initialState: CartState = {
  nodes: [],
  totalAmount: 0,
  isLoading: true
};

const authSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addNodes: (state: CartState, action: PayloadAction<NodeType[]>) => {
      const nodesForCart: CartNodeType[] = action.payload.map((node) => {
        const { _id, name, guide, price, is_reneweble, priority, max_duration_months } = node;
        const objData: CartNodeType = {
          quantity: LocalStorageCartService.getQuantityByIdNode(_id),
          duration: LocalStorageCartService.getDurationByIdNode(_id),
          _id,
          name,
          price,
          guide,
          is_reneweble,
          priority,
          max_duration_months
        };

        return objData;
      });
      state.nodes = nodesForCart;
      state.totalAmount = calcTotalAmount(state.nodes);
    },
    addNode: (state: CartState, action: PayloadAction<CartNodeType>) => {
      state.nodes.push(action.payload);
      state.totalAmount = calcTotalAmount(state.nodes);
      LocalStorageCartService.addToCart({
        _id: action.payload._id,
        duration: 1,
        quantity: 1
      });
    },
    deleteNode: (state: CartState, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      state.nodes = state.nodes.filter((node) => node._id !== id);
      state.totalAmount = calcTotalAmount(state.nodes);
      LocalStorageCartService.deleteNode(id);
    },
    clearCart: (state: CartState) => {
      state.nodes = [];
      state.totalAmount = 0;
      LocalStorageCartService.clearCart();
    },
    updateQuantityNodes: (state: CartState, action: PayloadAction<CartNodeQuantityType>) => {
      const { _id, quantity } = action.payload;
      const updatedNodes = state.nodes.map((node) => {
        if (node._id === _id) {
          return {
            ...node,
            quantity: quantity
          };
        }
        return node;
      });
      state.nodes = updatedNodes;
      state.totalAmount = calcTotalAmount(state.nodes);
      LocalStorageCartService.updateQuantityNode(_id, quantity);
    },
    updateDurationNodes: (state: CartState, action: PayloadAction<CartNodeDurationType>) => {
      const { _id, duration } = action.payload;
      const updatedNodes = state.nodes.map((node) => {
        if (node._id === _id) {
          return {
            ...node,
            duration: duration
          };
        }
        return node;
      });
      state.nodes = updatedNodes;
      state.totalAmount = calcTotalAmount(state.nodes);
      LocalStorageCartService.updateDurationNode(_id, duration);
    },
    startLoadingCart: (state: CartState) => {
      state.isLoading = true;
    },
    stopLoadingCart: (state: CartState) => {
      state.isLoading = false;
    },
    setTotalAmount: (state: CartState, action: PayloadAction<number>) => {
      state.totalAmount = action.payload;
    }
  }
});

export const {
  addNode,
  addNodes,
  deleteNode,
  clearCart,
  updateDurationNodes,
  updateQuantityNodes,
  startLoadingCart,
  stopLoadingCart,
  setTotalAmount
} = authSlice.actions;

export default authSlice.reducer;
