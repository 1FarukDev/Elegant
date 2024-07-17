import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  price: number;
  quantity: number;
  totalPrice: number;
  product_name: string;
  product_image: string;
  product_price: string | number;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const newItemPrice = typeof newItem.price === "string" ? parseFloat(newItem.price) : newItem.price;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItemPrice;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItemPrice,
        });
      }

      state.totalQuantity++;
      state.totalAmount = parseFloat((state.totalAmount + newItemPrice).toFixed(2));
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) {
        return;
      }

      const itemPrice = typeof existingItem.price === "string" ? parseFloat(existingItem.price) : existingItem.price;

      state.totalQuantity = Math.max(state.totalQuantity - 1, 0);
      state.totalAmount = parseFloat((state.totalAmount - itemPrice).toFixed(2));

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = parseFloat((existingItem.totalPrice - itemPrice).toFixed(2));
      }
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        const itemPrice = typeof existingItem.price === "string" ? parseFloat(existingItem.price) : existingItem.price;
        existingItem.quantity++;
        existingItem.totalPrice += itemPrice;
        state.totalQuantity++;
        state.totalAmount = parseFloat((state.totalAmount + itemPrice).toFixed(2));
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 0) {
        const itemPrice = typeof existingItem.price === "string" ? parseFloat(existingItem.price) : existingItem.price;
        existingItem.quantity--;
        existingItem.totalPrice = parseFloat((existingItem.totalPrice - itemPrice).toFixed(2));
        state.totalQuantity = Math.max(state.totalQuantity - 1, 0);
        state.totalAmount = parseFloat((state.totalAmount - itemPrice).toFixed(2));

        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
