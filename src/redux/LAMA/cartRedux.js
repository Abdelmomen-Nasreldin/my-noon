import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quant: 0,
    //total: 0,
  },
  reducers: {
    addItemCart: (state, action) => {
      const exist = state.products.find((x) => x._id === action.payload._id);
      if (exist) {
        exist.quant = action.payload.quant;
      } else {
        state.quant += 1;
        state.products.push(action.payload);
        //state.total += action.payload.price * action.payload.quant;
      }
    },
    addProduct: (state, action) => {
      const exist = state.products.find((x) => x._id === action.payload._id);
      if (exist) {
        exist.quant++;
      } else {
        state.quant += 1;
        state.products.push(action.payload);
        //state.total += action.payload.price * action.payload.quant;
      }
    },
    delProduct: (state, action) => {
      const exist = state.products.find((x) => x._id === action.payload._id);
      if (exist.quant === 1) {
        state.products = state.products.filter((x) => x._id !== exist._id);
        state.quant -= 1;
      } else {
        exist.quant--;
      }
    },
    ResetCart: (state) => {
      state.products = [];
      state.quant = 0;
    },
  },
});

export const { addItemCart, addProduct, delProduct, ResetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
