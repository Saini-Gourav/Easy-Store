import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
  },
  reducers: {
    add: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartData.find(item => item._id === newItem._id);

      if (!existingItem) {
        // state.cartData.push(newItem);
        state.cartData.push({...newItem, quantity: 1, amount: newItem.price});
      } else {
        
        existingItem.quantity += 1;
        // amount ke liye
        existingItem.amount = existingItem.quantity * existingItem.price;
      }
    },
    remove: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cartData = state.cartData.filter((item) => item._id !== itemIdToRemove);
    },

    increaseQuantity: (state, action) => {
      const itemIdToIncrease = action.payload;
      const itemIncrease = state.cartData.find((item) => item._id === itemIdToIncrease);

      if (itemIncrease) {
        itemIncrease.quantity += 1;
        // increase amount karne ke liye
        itemIncrease.amount = itemIncrease.quantity * itemIncrease.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemIdToDecrease = action.payload;
      const itemDecrease = state.cartData.find((item) => item._id === itemIdToDecrease);

      if (itemDecrease && itemDecrease.quantity > 1) {
        itemDecrease.quantity -= 1;
        itemDecrease.amount = itemDecrease.quantity * itemDecrease.price;
      }
    },

  },
});

export const { add, remove,increaseQuantity,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

