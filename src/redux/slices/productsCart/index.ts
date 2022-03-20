import { Product } from "../../../model/product.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IProducstCart {
  products: Product[];
};

const initialState: IProducstCart = {
  products: [],
};

const productsCartSlice = createSlice({
  name: "productsCart",
  initialState,
  reducers: {
    addProduct: {
      reducer: (state, action: PayloadAction<Product>) => {
        state.products.push(action.payload);
      },
      prepare: (prod: Product) => {
        return { payload: prod }
      }
    },
    removeProduct: {
      reducer: (state, action: PayloadAction<string>) => {
        // stuffs
      },
      prepare: (prodId: string) => {
        return { payload: prodId };
      }
    }
  }
});

export const { addProduct, removeProduct } = productsCartSlice.actions;

export default productsCartSlice.reducer