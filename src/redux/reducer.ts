import { combineReducers } from "redux";

import productCart from "./slices/productsCart";


const rootReducer = combineReducers({ productCart });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;