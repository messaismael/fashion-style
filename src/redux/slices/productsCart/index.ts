import { Product } from "../../../model/product.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartService } from "../../../services/cart/cart.services";


interface IProducstCart {
  count: number;
};

const initialState: IProducstCart = {
  count: CartService.cartSize
};

const productsCartSlice = createSlice({
  name: "productsCart",
  initialState,
  reducers: {
    addProduct: (state) => {
      state.count++;
    },
    removeProduct: (state) => {
      state.count--;
    }
  }
});

export const { addProduct, removeProduct } = productsCartSlice.actions;

export default productsCartSlice.reducer