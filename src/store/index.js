import {
    combineReducers,
    configureStore
  } from '@reduxjs/toolkit';
  
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";

const rootReducer = combineReducers(
    {
        cash:cashReducer,
        customers:customerReducer,
    }
);

export const store = configureStore({rootReducer});