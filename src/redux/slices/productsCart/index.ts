import { Product } from "../../../model/product.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IProducstCart {
  products: string[];
};

const initialState: IProducstCart = {
  products: [],
};

const productsCartSlice = createSlice({
  name: "productsCart",
  initialState,
  reducers: {
    addProduct: {
      reducer: (state, action: PayloadAction<string>) => {
        if (!state.products.includes(action.payload)) {
          state.products.push(action.payload);
        }
      },
      prepare: (prod: string) => {
        return { payload: prod }
      }
    },
    removeProduct: {
      reducer: (state, action: PayloadAction<string>) => {
        state.products.splice(state.products.indexOf(action.payload), 1);
      },
      prepare: (prodId: string) => {
        return { payload: prodId };
      }
    }
  }
});

export const { addProduct, removeProduct } = productsCartSlice.actions;

export default productsCartSlice.reducer