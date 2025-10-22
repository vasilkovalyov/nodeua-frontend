import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "./cart.types";
import { CartNodeDurationType, CartNodeQuantityType, CartNodeType } from "./cart.type";
import LocalStorageCartService from "@/src/shared/services/local-storage-cart";
import { NodeType } from "@/app/entities/node";

const initialState: CartState = {
  nodes: []
};

const authSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addNodes: (state: CartState, action: PayloadAction<NodeType[]>) => {
      const nodesForCart: CartNodeType[] = action.payload.map((node) => {
        const {
          _id,
          name,
          guide,
          price,
          link,
          is_active,
          is_reneweble,
          priority,
          max_duration_months,
          max_duration_days
        } = node;
        const objData: CartNodeType = {
          quantity: LocalStorageCartService.getQuantityByIdNode(_id),
          duration: LocalStorageCartService.getDurationByIdNode(_id),
          _id,
          name,
          price,
          link,
          is_active,
          guide,
          is_reneweble,
          priority,
          max_duration_months,
          max_duration_days
        };

        return objData;
      });
      state.nodes = nodesForCart;
    },
    addNode: (state: CartState, action: PayloadAction<CartNodeType>) => {
      state.nodes.push(action.payload);
      LocalStorageCartService.addToCart({
        _id: action.payload._id,
        duration: 1,
        quantity: 1
      });
    },
    deleteNode: (state: CartState, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      state.nodes = state.nodes.filter((node) => node._id !== id);
      LocalStorageCartService.deleteNode(id);
    },
    clearCart: (state: CartState) => {
      state.nodes = [];
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
      LocalStorageCartService.updateDurationNode(_id, duration);
    }
  }
});

export const { addNode, addNodes, deleteNode, clearCart, updateDurationNodes, updateQuantityNodes } = authSlice.actions;

export default authSlice.reducer;
